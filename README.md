27 Nov 2022

Next.js v13 with two features not ready for production:

- Turbopack - currently in alpha. I've added --turbo in package.json to enable it.
- I have enabled experimental feature appDir by replacing next specific folder named /pages with /app.

### Notes

This project is only for testing next.js version 13 with experimental features.

This project displays data from a collection of notes ({ title: string; content: string }) and has ability to add new notes./
It uses SSR and CSR when requiring user input./
Includes some of the reserved file names (`page, layout, loading, error`) and using navigation parameters (params.id).

### Test locally by running:

- the development server:

```bash
npm run dev
```

- this project uses PocketBase for db and server on port 8090. Run:

```bash
.\pocketbase.exe serve
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Next.JS documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

They currently have a typo bug: "semver" for "server" in a warning related to using appDir:

```yarn
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
```

### Deploy on Vercel

[Need to test their recommended deployment option]

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
