# Edit website content here

Start with the four files at this folder's top level. They point to the content
for the Solutions, Platforms, Services and Industries menus. The files inside
each matching folder contain the actual headings, descriptions, images and
child entries. Each child `id` becomes part of its URL, so keep existing IDs
stable when editing copy.

| Site area | Content file |
| --- | --- |
| Solutions | `solutionsData.ts` and `solutions/*.js` |
| Platforms | `platformsData.ts` and `platforms/platform-detail.js` |
| Services | `servicesData.ts` and `services/service-detail.js` |
| Industries | `industriesData.ts` and `industries/industry-detail.js` |
| Home, navigation, footer, contact | `shared/home.js`, `shared/site.js`, `shared/contact.js` |
| Company page | `company/index-content.js` |

Put site images in `public/images/<section>/` and refer to them with a leading
slash, for example `/images/solutions/cat-ai.jpg`. Page layouts are in
`src/pages/`; URL definitions are in `src/routes/AppRoutes.tsx`.
