27 Nov 2022

Next.js v13 with two features not ready for production:

- Turbopack - currently in alpha. I've added --turbo in package.json to enable it.
- I have enabled experimental feature appDir by replacing next specific folder named /pages with /app.

### Notes

I created this repo to test next.js version 13 with experimental features.

This project displays data from a collection of notes ({ title: string; content: string }) and has ability to add new notes.\
It uses SSR and CSR when requiring user input.\
I included some of the reserved file names (`page, layout, loading, error`) and using navigation parameters (params.id).

### Test locally by running:

- the development server:

```bash
npm run dev
```

- this project uses PocketBase for db and server on port 8090. Run:

```bash
.\pocketbase.exe serve
```

Might need to run `npm install next` if you haven't already on your system.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Open [http://localhost:8090](http://localhost:8090) to access PocketBase's interface and view / edit the db.

### Next.JS documentation

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

They currently have a typo bug: "semver" for "server" in a warning related to using appDir:

`warn - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.`

### Deploy on Vercel

Kept this section because I want to test their recommended deployment option.

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

[Next.js deployment documentation](https://nextjs.org/docs/deployment)
