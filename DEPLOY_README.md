# Deploying to Vercel

This project is configured to deploy to Vercel with GitHub integration.

## Prerequisites

1.  **Vercel Account**: Sign up at [vercel.com](https://vercel.com).
2.  **GitHub Repository**: Ensure this project is pushed to a GitHub repository.

## Setup Steps

1.  **Import Project**:
    *   Go to your Vercel Dashboard.
    *   Click "Add New..." -> "Project".
    *   Import your GitHub repository.

2.  **Configure Environment Variables**:
    *   In the "Configure Project" step (or later in Settings -> Environment Variables), add the following variables from your `.env.local` file:
        *   `NEXT_PUBLIC_FIREBASE_API_KEY`
        *   `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
        *   `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
        *   `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
        *   `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
        *   `NEXT_PUBLIC_FIREBASE_APP_ID`
        *   `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`

3.  **Deploy**:
    *   Click "Deploy".
    *   Vercel will automatically detect Next.js and build your site.

## Continuous Deployment

Every push to the `main` (or `master`) branch will automatically trigger a new deployment on Vercel. Preview deployments will be created for pull requests.

## Firebase Services

Firestore and Storage rules are managed via the Firebase CLI. To deploy changes to rules:

```bash
firebase deploy --only firestore,storage
```
