# 📘 E-Shiksha – Learning Regiment System (MERN App)

**E-Shiksha** is a modern **Learning Management System (LMS)** built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js).  
It provides a complete ecosystem for **students, instructors, and admins** including **course creation, learning, payments, and management**.

---

## 🎯 Features

### 👩‍🎓 Student
- 🏠 Homepage with featured courses  
- 📚 Browse/Search course catalog  
- 💖 Wishlist & 🛒 Cart with secure Razorpay checkout  
- 🎥 Course player with videos, PDFs, assignments  
- 👤 Profile, progress tracking & certificates  

### 👨‍🏫 Instructor
- 📊 Dashboard with course stats & earnings  
- 📝 Create, edit & manage courses  
- 📈 Insights & analytics  
- 👤 Profile management  

### 🛠️ Admin
- 🖥️ Platform overview dashboard  
- 👥 User management (approve/ban users)  
- 📚 Course approval/removal  
- 💰 Revenue reports & growth tracking  

---

## 🏗️ Tech Stack

- 🎨 **Frontend** → React.js, Tailwind CSS, Redux/Context, React Router  
- ⚙️ **Backend** → Node.js, Express.js  
- 🗄️ **Database** → MongoDB + Mongoose  
- ☁️ **Cloud Storage** → Cloudinary  
- 💳 **Payments** → Razorpay  
- 🔐 **Auth & Security** → JWT, Bcrypt  

---

## ⚙️ System Architecture

E-Shiksha follows a **Client–Server Architecture** with three main components:

- 🎨 **Frontend (React.js)** → User interface  
- ⚙️ **Backend (Node.js + Express.js)** → APIs & business logic  
- 🗄️ **Database (MongoDB Atlas)** → Users, courses, progress, reviews  

🔐 Security powered by **JWT + Bcrypt**, with media managed by **Cloudinary**.  

---

## 🔌 API Endpoints (Sample)

### 🔑 Auth
- `POST /api/auth/signup` → Register new user  
- `POST /api/auth/login` → Login & get token  
- `POST /api/auth/forgot-password` → Reset password  

### 📚 Courses
- `GET /api/courses` → Get all courses  
- `GET /api/courses/:id` → Get course by ID  
- `POST /api/courses` → Create new course (Instructor only)  
- `PUT /api/courses/:id` → Update course  
- `DELETE /api/courses/:id` → Delete course  

### 💳 Payments
- `POST /api/payment/checkout` → Start payment  
- `POST /api/payment/verify` → Verify Razorpay transaction  

---

## 🚀 Deployment

- 🎨 **Frontend** → [Vercel](https://vercel.com/)  
- ⚙️ **Backend** → [Render](https://render.com/)  
- 🗄️ **Database** → [MongoDB Atlas](https://www.mongodb.com/atlas)  
- ☁️ **Media** → [Cloudinary](https://cloudinary.com/)  

---

## 🌟 Future Enhancements

- 🎮 **Gamification** → Badges, points, leaderboards  
- 🤖 **AI-based Recommendations** → Personalized learning  
- 💬 **Social Learning** → Forums & peer-to-peer discussions  
- 📱 **Mobile App** → Android & iOS support  
- 🕶️ **AR/VR Integration** → Immersive courses  

---

## 📸 Screenshots
<img width="1909" height="868" alt="image" src="https://github.com/user-attachments/assets/4192a814-b5de-4334-8c04-14d592e8a6d6" />

---

# 📘 E-Shiksha – Learning Regiment System  

> 🚀 This project is built under the guidance of **[Love Babbar](https://www.linkedin.com/in/love-babbar-38ab2887/)** ❤️  

**E-Shiksha** is a modern **Learning Management System (LMS)** built with the **MERN stack**.  
It provides a complete ecosystem for **students, instructors, and admins** including **course creation, learning, payments, and management**.

---

## 🧑‍💻 Installation & Setup

```bash
# Clone the repo
git clone https://github.com/your-username/E-Shiksha.git

# Install dependencies
cd E-Shiksha
npm install

# Start backend server
cd server
npm run dev

# Start frontend
cd client
npm start
🤝 Contributing
Contributions are always welcome!

🍴 Fork the project

🌱 Create a feature branch

✅ Commit your changes

🚀 Open a Pull Request

📜 License
This project is licensed under the MIT License.

## ✨ Author  

**Md Shahbaz**  
🎓 Full-Stack MERN Developer | Final Year B.Sc IT Student  
📍 Jharkhand, India  

<p align="left">
  <a href="mailto:shahbaz05665@gmail.com">
    <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
  </a>
  <a href="https://github.com/mdshahbaz-9">
    <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" />
  </a>
  <a href="https://linkedin.com/in/md-shahbaz">
    <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" />
  </a>
  <a href="https://portfolioshz.vercel.app/">
    <img src="https://img.shields.io/badge/Portfolio-1E293B?style=for-the-badge&logo=vercel&logoColor=white" />
  </a>
</p>

<p align="center">
  Made with ❤️ by <a href="https://github.com/mdshahbaz-9">Md Shahbaz</a>
</p>
