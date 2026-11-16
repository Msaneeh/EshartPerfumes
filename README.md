# EESHERT PERFUMES — Luxury Perfume Store

A modern, premium perfume storefront and business management platform built to simplify online perfume shopping and product management.

**EESHERT PERFUMES** combines an elegant black-and-gold shopping experience with a secure admin dashboard, allowing customers to discover fragrances and order directly through WhatsApp while giving the business owner complete control over the product catalogue.

The platform eliminates unnecessary e-commerce complexity by replacing traditional cart and payment workflows with a seamless WhatsApp ordering experience.

**Live Demo:** https://eshartperfumes.vercel.app/  
**GitHub Repository:** https://github.com/Msaneeh/EshartPerfumes

---

## ✨ Overview

EESHERT PERFUMES is designed around two independent user experiences:

### 🛍️ Customer Storefront

A responsive, luxury-inspired website where customers can:

- Explore the perfume collection.
- Browse products by category.
- Search perfumes by name or brand.
- Filter and sort available products.
- View detailed product information, images, prices, and fragrance notes.
- Check product availability.
- Discover featured and related products.
- Order directly through WhatsApp with automatically generated product details.

### 🔐 Admin Dashboard

A private management interface that allows the business owner to:

- Securely sign in.
- View an overview of the product catalogue.
- Add new perfumes and upload product images.
- Edit existing product information.
- Delete products with confirmation.
- Manage product availability.
- Feature selected products on the homepage.
- Search and filter the product catalogue.
- Monitor product statistics and recent updates.

All product information is managed through Firebase Firestore, allowing storefront content to stay synchronized with administrative changes.

---

## 🎯 Why EESHERT PERFUMES?

Traditional e-commerce platforms often introduce unnecessary complexity for small businesses that primarily receive orders through WhatsApp.

EESHERT PERFUMES takes a simpler approach:

- **Discover:** Customers explore a premium digital catalogue.
- **Select:** Customers view detailed perfume information.
- **Connect:** Customers click the WhatsApp ordering button.
- **Communicate:** WhatsApp opens with a pre-filled message containing the selected product information.
- **Complete:** The business owner communicates with the customer and completes the sale.

This approach provides a professional online presence without requiring a complicated checkout system or payment gateway.

---

## 🛠️ Technology Stack

The application is built using modern frontend technologies and Firebase services.

| Technology | Purpose |
|---|---|
| React.js | Component-based user interface |
| Vite | Frontend development and build tooling |
| React Router DOM | Client-side routing and navigation |
| Tailwind CSS | Responsive styling and design system |
| Shadcn UI | Reusable interface components |
| Lucide React | Icon library |
| Firebase Authentication | Administrator authentication |
| Cloud Firestore | Product database and application data |
| Cloudinary | Product image hosting and optimization |
| Sonner | Toast notifications |
| Vercel | Frontend deployment |

---

## 🎨 Design System

EESHERT PERFUMES uses a luxury-inspired visual identity built around black, gold, and white.

### Brand Colours

| Colour | Hex Code | Usage |
|---|---|---|
| Rich Black | `#080808` | Primary text and dark sections |
| Classic Gold | `#C7A567` | Brand accents and highlights |
| Champagne Gold | `#E2C98F` | Decorative elements |
| Deep Gold | `#A68142` | Buttons and interactive states |
| Pure White | `#FFFFFF` | Content backgrounds |
| Warm White | `#F8F7F3` | Main background |

### Typography

- **Cormorant Garamond:** Elegant headings and editorial typography.
- **Inter:** Body text, navigation, product information, and interface elements.

### UI Philosophy

- Luxury-inspired black-and-gold identity.
- Modern Liquid Glass visual elements.
- Subtle transparency and backdrop blur.
- Refined borders and shadows.
- Clean product photography.
- Consistent spacing and typography.
- Responsive layouts across desktop, tablet, and mobile.

---

## 🚀 Key Features

### 1. Customer Storefront

**Immersive Homepage**
- Premium hero section.
- Featured perfume collection.
- Product category sections.
- New arrivals and selected products.
- Brand introduction.
- Contact and social media links.

**Dynamic Product Catalogue**
- Products retrieved from Cloud Firestore.
- Real-time catalogue synchronization.
- Product search by name and brand.
- Category filtering.
- Price sorting.
- Newest product sorting.
- Availability indicators.

**Product Details**
- Product images.
- Brand and perfume name.
- Product description.
- Pricing information.
- Size and fragrance notes.
- Stock availability.
- Related product recommendations.

**WhatsApp Ordering**

Customers can initiate an order directly from a product page.

The system generates a WhatsApp message containing:

- Product name.
- Product size.
- Product price.
- Product page URL.

The customer can review and send the message through WhatsApp.

No customer registration or payment gateway is required.

### 2. Admin Dashboard

**Authentication**
- Firebase Email/Password authentication.
- Protected administrative routes.
- Authenticated session management.
- Restricted administrative operations.

**Dashboard Overview**

Displays important catalogue statistics:

- Total products.
- Available products.
- Sold-out products.
- Featured products.
- Recently added or updated products.

**Product Management**

Complete product CRUD functionality:

- Create products.
- Retrieve products.
- Update product information.
- Delete products.
- Upload and preview product images.
- Manage availability.
- Feature products on the storefront.

**Catalogue Management**
- Product search.
- Category filtering.
- Availability filtering.
- Product sorting.
- Quick stock-status updates.

### 3. Image Management

Cloudinary handles product image uploads and delivery.

Features include:

- Image selection.
- Image preview.
- Cloudinary uploads.
- Image URL storage in Firestore.
- Optimized image delivery.

### 4. Notifications and Feedback

Sonner provides user feedback for important operations:

- Successful product creation.
- Successful product updates.
- Product deletion.
- Image upload progress or errors.
- Authentication failures.
- Form validation errors.

---

## 📂 Project Structure

```text
src/
│
├── components/
│   ├── admin/
│   │   ├── Sidebar.jsx
│   │   ├── AdminHeader.jsx
│   │   ├── ProductTable.jsx
│   │   └── ProductForm.jsx
│   │
│   ├── home/
│   │   ├── Hero.jsx
│   │   ├── FeaturedProducts.jsx
│   │   └── Categories.jsx
│   │
│   ├── public/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── WhatsAppButton.jsx
│   │
│   ├── shop/
│   │   ├── ProductCard.jsx
│   │   ├── ProductFilters.jsx
│   │   └── ProductGrid.jsx
│   │
│   └── ui/
│       └── Reusable UI components
│
├── context/
│   └── AuthContext.jsx
│
├── layouts/
│   ├── PublicLayout.jsx
│   └── AdminLayout.jsx
│
├── lib/
│   ├── firebase.js
│   └── productService.js
│
├── pages/
│   ├── public/
│   │   ├── Home.jsx
│   │   ├── Shop.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── About.jsx
│   │   └── Contact.jsx
│   │
│   └── admin/
│       ├── Login.jsx
│       ├── Dashboard.jsx
│       ├── Products.jsx
│       ├── AddProduct.jsx
│       ├── EditProduct.jsx
│       ├── Categories.jsx
│       └── Settings.jsx
│
├── router/
│   ├── AppRouter.jsx
│   └── ProtectedRoute.jsx
│
├── App.jsx
├── index.css
└── main.jsx
```

---

## ⚙️ Getting Started

Follow these instructions to run the project locally.

### Prerequisites

Make sure you have installed:

- Node.js (LTS recommended).
- npm.
- Git.
- A Firebase account.
- A Cloudinary account.

### 1. Clone the Repository

```bash
git clone https://github.com/Msaneeh/EshartPerfumes.git

cd EshartPerfumes
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Firebase

Create a project through the [Firebase Console](https://console.firebase.google.com/).

Configure the following services:

**Firebase Authentication**
- Enable Email/Password authentication.
- Create the administrator account manually.
- Do not expose public administrator registration.

**Cloud Firestore**
- Create a Firestore database.
- Configure the required collections.
- Deploy appropriate Firestore Security Rules.

### 4. Configure Cloudinary

Create an account at [Cloudinary](https://cloudinary.com/).

Then:

1. Open the Cloudinary dashboard.
2. Navigate to Settings.
3. Open the Upload settings.
4. Create an unsigned upload preset.
5. Configure allowed formats, upload limits, and an appropriate upload folder.

### 5. Configure Environment Variables

Create a `.env` file in the project root.

```env
# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id

# Cloudinary Configuration
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_UPLOAD_PRESET=your_unsigned_upload_preset
```

Replace the placeholder values with your actual project configuration.

**Important:** Never commit your `.env` file to GitHub. Ensure it is included in `.gitignore`.

Vite exposes variables prefixed with `VITE_` to the browser. Never put private API secrets, service-account credentials, or privileged keys in these variables.

### 6. Start the Development Server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:5173
```

### 7. Access the Admin Dashboard

Navigate to:

```text
http://localhost:5173/admin/login
```

Sign in using the administrator credentials created through Firebase Authentication.

---

## 🔒 Security

Security is important because the application has a public storefront and a private administrative interface.

The following protections should be configured:

- Firebase Authentication for administrator sign-in.
- Explicit administrator authorization, rather than trusting authentication alone.
- Protected admin routes.
- Firestore Security Rules.
- Input validation before writing product data.
- Cloudinary upload restrictions.
- Appropriate environment variable handling.

### Firestore Security Rules

The following is an example of a more restrictive ruleset using an administrator UID allowlist.

Replace `YOUR_ADMIN_UID` with the actual Firebase Authentication UID of the authorized administrator.

```javascript
rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {

    function isAdmin() {
      return request.auth != null
        && request.auth.uid == 'YOUR_ADMIN_UID';
    }

    match /products/{productId} {
      allow read: if true;
      allow create, update, delete: if isAdmin();
    }

    match /settings/{documentId} {
      allow read: if true;
      allow write: if isAdmin();
    }
  }
}
```

These rules are a starting point. Add schema validation for product fields and ensure public reads expose only information intended for customers.

If draft products or private business information are stored, use separate access rules and document structures.

**Important:** A protected React route is not a substitute for database security. Firebase Security Rules must independently enforce administrator permissions.

For more information, consult the [Firebase Security Rules documentation](https://firebase.google.com/docs/firestore/security/get-started).

---

## 🌐 Deployment

The frontend is deployed using Vercel.

### Deployment Steps

1. Push the project to GitHub.
2. Sign in to [Vercel](https://vercel.com/).
3. Import the GitHub repository.
4. Configure the environment variables.
5. Deploy the application.
6. Add the production domain to Firebase Authentication's authorized domains.
7. Test the public storefront and administrator login.

### Live Application

**EESHERT PERFUMES**

https://eshartperfumes.vercel.app/

---

## 🔮 Future Improvements

Potential improvements for future versions include:

- Customer shopping cart with WhatsApp order summaries.
- Manual order tracking.
- Inventory quantity management.
- Sales and order analytics.
- Customer reviews and ratings.
- Product wishlists.
- Advanced product recommendations.
- Promotional discounts.
- Custom domain integration.
- Progressive Web App (PWA) support.

These features can be introduced as the business grows and its operational requirements evolve.

---

## 🤝 Contributing

Contributions, suggestions, and feedback are welcome.

If you would like to improve the project:

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Commit your changes.
5. Open a pull request.

---

## 👨‍💻 Developer

**Designed and Developed by Sani Aliyu Muhammad**

Frontend Developer | Software Engineer

- GitHub: https://github.com/Msaneeh

---

## 📄 License

This project is currently maintained as a business-specific application.

A license should be added to the repository before granting others permission to reuse, distribute, or modify the source code.

---

**EESHERT PERFUMES — Experience Luxury. Discover Your Signature Scent.**