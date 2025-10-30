# استخدام صورة Node.js رسمية
FROM node:18-alpine

# تعيين مجلد العمل
WORKDIR /app

# نسخ package files
COPY package*.json ./

# تثبيت dependencies
RUN npm install --only=production

# نسخ باقي الملفات
COPY . .

# فتح المنفذ
EXPOSE 3000

# تشغيل التطبيق
CMD ["npm", "start"]