import { useEffect, useState } from 'react';
import { Command } from 'cmdk';
import { Search, ArrowRight, Sparkles, Package, Briefcase, Building } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';

// Import navigation items from Header
import {
    solutionsItems,
    industriesItems,
    productsItems,
    servicesItems,
    CategoryItem,
} from './layout/Header';

// Define navigation item type
type NavigationItem = {
    title: string;
    description: string;
    href: string;
    category: 'Solutions' | 'Products' | 'Services' | 'Industries';
    icon: React.ComponentType<{ className?: string }>;
    parentCategory?: string;
};

// Aggregate all navigation items
const getAllNavigationItems = (): NavigationItem[] => {
    const allItems: NavigationItem[] = [];

    // Add all Solutions items with category
    solutionsItems.forEach(cat => {
        cat.children?.forEach(child => {
            allItems.push({
                ...child,
                category: 'Solutions',
                icon: Sparkles,
                parentCategory: cat.title,
            });
        });
    });

    // Add all Products items
    productsItems.forEach(cat => {
        cat.children?.forEach(child => {
            allItems.push({
                ...child,
                category: 'Products',
                icon: Package,
                parentCategory: cat.title,
            });
        });
    });

    // Add all Services items
    servicesItems.forEach(cat => {
        cat.children?.forEach(child => {
            allItems.push({
                ...child,
                category: 'Services',
                icon: Briefcase,
                parentCategory: cat.title,
            });
        });
    });

    // Add all Industries items
    industriesItems.forEach(cat => {
        cat.children?.forEach(child => {
            allItems.push({
                ...child,
                category: 'Industries',
                icon: Building,
                parentCategory: cat.title,
            });
        });
    });

    return allItems;
};

interface CommandPaletteProps {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}

export function CommandPalette({ open: externalOpen, onOpenChange }: CommandPaletteProps = {}) {
    const [internalOpen, setInternalOpen] = useState(false);
    const [search, setSearch] = useState('');
    const navigationItems = getAllNavigationItems();

    // Use external control if provided, otherwise internal
    const open = externalOpen !== undefined ? externalOpen : internalOpen;
    const setOpen = onOpenChange || setInternalOpen;

    // Keyboard shortcut handler
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen(!open);
            }
        };

        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);

    // Handle navigation
    const handleSelect = (href: string) => {
        setOpen(false);
        setSearch('');
        window.location.hash = href;
        // Optionally smooth scroll to element
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Group items by category
    const groupedItems = {
        Solutions: navigationItems.filter(i => i.category === 'Solutions'),
        Products: navigationItems.filter(i => i.category === 'Products'),
        Services: navigationItems.filter(i => i.category === 'Services'),
        Industries: navigationItems.filter(i => i.category === 'Industries'),
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="p-0 max-w-2xl overflow-hidden gap-0">
                <Command className="rounded-lg border-0 shadow-none">
                    <div className="flex items-center border-b border-border px-4">
                        <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                        <Command.Input
                            value={search}
                            onValueChange={setSearch}
                            placeholder="Search navigation..."
                            className="flex h-12 w-full rounded-md bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 border-0 focus:ring-0"
                        />
                    </div>
                    <Command.List className="max-h-[400px] overflow-y-auto p-2">
                        <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                            No results found.
                        </Command.Empty>

                        {Object.entries(groupedItems).map(([category, items]) => (
                            items.length > 0 && (
                                <Command.Group key={category} heading={category} className="mb-2">
                                    {items.map((item) => {
                                        const Icon = item.icon;
                                        return (
                                            <Command.Item
                                                key={item.href}
                                                value={`${item.title} ${item.description} ${item.parentCategory}`}
                                                onSelect={() => handleSelect(item.href)}
                                                className="flex items-center gap-3 rounded-lg px-3 py-2.5 cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground hover:bg-accent/50 transition-colors group"
                                            >
                                                <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm font-medium truncate">{item.title}</div>
                                                    <div className="text-xs text-muted-foreground truncate">
                                                        {item.description}
                                                    </div>
                                                </div>
                                                <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 group-aria-selected:opacity-100 transition-opacity shrink-0" />
                                            </Command.Item>
                                        );
                                    })}
                                </Command.Group>
                            )
                        ))}
                    </Command.List>
                    <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground flex items-center gap-4">
                        <div className="flex items-center gap-1">
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                                ↑↓
                            </kbd>
                            <span>to navigate</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                                ↵
                            </kbd>
                            <span>to select</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium">
                                esc
                            </kbd>
                            <span>to close</span>
                        </div>
                    </div>
                </Command>
            </DialogContent>
        </Dialog>
    );
}
