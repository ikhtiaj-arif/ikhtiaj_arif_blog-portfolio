# 🚀 Personal Portfolio & Blog Website

## 🎯 Objective
This project is a **fully functional personal portfolio and blog website** built with **Next.js and TypeScript**. It includes dynamic routing, API integration, authentication, state management, and deployment to provide a seamless user experience.

## 🌟 Features

### 1️⃣ **Public Pages (Accessible to All Users)**
✅ **Home Page (`/`)**
- Showcases personal introduction (name, bio, and profile picture)
- Displays skills using icons/skill bars
- Highlights featured projects (static or fetched from an API)
- Resume download button

✅ **Projects Page (`/projects`)**
- Lists projects with images, descriptions, and links
- Clicking a project opens a detailed page (`/projects/[id]`)

✅ **Blog Page (`/blog`)**
- Displays a list of blogs (fetched from an API or JSON file)
- Clicking on a blog opens a detailed page (`/blog/[id]`)

✅ **Contact Page (`/contact`)**
- Simple contact form (name, email, message)
- Saves messages in local storage or a database

---
### 2️⃣ **Dashboard (Only for Logged-in Users)**
✅ **Login (`/dashboard`)**
- Social login using NextAuth
- Only authenticated users can access the dashboard

✅ **Blog Management (`/dashboard/blogs`)**
- Create, read, edit, and delete blog posts
- Form with fields like title, content, image, and category

✅ **Project Management (`/dashboard/projects`)**
- Full CRUD operations for projects
- Upload project image, title, live link, and descriptions

✅ **Message Management (`/dashboard/messages`)**
- View messages submitted from the contact form

---
## 🔹 **Technical Requirements**

### ✅ **Frontend**
- **Next.js with TypeScript**
- **Tailwind CSS** for styling (or any UI library)
- **Dynamic routes** (`/projects/[id]`, `/blog/[id]`)

### ✅ **Backend**
- Built with **Node.js & Express.js** to manage blogs, projects, and messages
- API accessible publicly

### ✅ **Database**
- **MongoDB** for storing projects, blogs, and messages

### ✅ **Authentication**
- **NextAuth** for secure social login

### ✅ **Deployment**
- Hosted on **Vercel**
- Stores projects and blogs in **MongoDB**

---
## 🎁 **Bonus Features**
- 🔹 **Next.js API routes** (`/api/...`) *(optional)*
- 🌙 **Dark mode toggle**
- ✍️ **Markdown support for blogs** *(optional)*
- ⚡ **Server-Side Rendering (SSR) for better SEO**
- 📡 **Uses SSR, SSG, and metadata based on the use case**

---
## 🛠️ **Installation & Setup**

### 1️⃣ **Clone the repository**
```sh
git clone https://github.com/your-username/your-repository.git
cd your-repository
```

### 2️⃣ **Install dependencies**
```sh
yarn install  # or npm install
```

### 3️⃣ **Set up environment variables**
Create a `.env.local` file and add the following:
```
NEXT_PUBLIC_API_URL=your_backend_api_url
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
```

### 4️⃣ **Run the project**
```sh
yarn dev  # or npm run dev
```

### 5️⃣ **Deploy on Vercel**
```sh
vercel
```

---
## 📸 **Screenshots**
(Add screenshots of your project here)

---
## 🤝 **Contributing**
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---
## 🛡️ **License**
This project is licensed under the **MIT License**.

---
## 🌎 **Connect with Me**
📧 Email: your-email@example.com  
🔗 LinkedIn: [your-profile](https://linkedin.com/in/your-profile)  
🐦 Twitter: [@yourhandle](https://twitter.com/yourhandle)

