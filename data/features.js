import { 
  Layers, 
  Zap, 
  Type, 
  Package, 
  Shield, 
  Users, 
  Wrench,
  Smartphone
} from "lucide-react";

const featuresData = [
  {
    icon: Layers,
    title: {
      en: "Multiple Desktop Environments",
      fa: "محیط‌های دسکتاپ متنوع"
    },
    desc: {
      en: "Official editions with KDE Plasma (flagship), GNOME, XFCE and more  ready to use out of the box.",
      fa: "نسخه‌های رسمی با KDE Plasma (پرچم‌دار)، GNOME، XFCE و محیط‌های دیگر  آماده استفاده بلافاصله پس از نصب."
    }
  },
  {
    icon: Zap,
    title: {
      en: "Rolling Release Model",
      fa: "مدل رولینگ ریلیز"
    },
    desc: {
      en: "Always up-to-date with the latest software, kernels and security patches  just like Arch Linux.",
      fa: "همیشه به‌روز با جدیدترین نرم‌افزارها، کرنل‌ها و پچ‌های امنیتی  دقیقاً مانند آرچ لینوکس."
    }
  },
  {
    icon: Type,
    title: {
      en: "Perfect Persian Support",
      fa: "پشتیبانی کامل پارسی"
    },
    desc: {
      en: "Beautiful optimized Persian fonts, full RTL layout, Jalali calendar, Persian keyboard and Firefox fixes from the first boot.",
      fa: "فونت‌های پارسی زیبا و بهینه‌شده، پشتیبانی کامل راست‌به‌چپ، تقویم جلالی، کیبورد پارسی و رفع مشکلات فایرفاکس از همان لحظه اول."
    }
  },
  {
    icon: Package,
    title: {
      en: "Calamares Graphical Installer",
      fa: "نصب‌گر گرافیکی Calamares"
    },
    desc: {
      en: "Fast, simple and reliable installation in minutes with the user-friendly Calamares installer.",
      fa: "نصب سریع، ساده و قابل اعتماد در چند دقیقه با نصب‌گر محبوب و کاربرپسند Calamares."
    }
  },
  {
    icon: Shield,
    title: {
      en: "Security & Privacy Focused",
      fa: "تمرکز بر امنیت و حریم خصوصی"
    },
    desc: {
      en: "No telemetry, automatic security updates, hardened configurations and privacy-respecting defaults.",
      fa: "بدون جمع‌آوری داده، به‌روزرسانی‌های امنیتی خودکار، تنظیمات سخت‌شده و پیش‌فرض‌های احترام‌گذار به حریم خصوصی."
    }
  },
  {
    icon: Wrench,
    title: {
      en: "Powerful Tools & Helpers",
      fa: "ابزارهای اختصاصی پارچ"
    },
    desc: {
      en: "Parch-specific scripts like waydroid-helper, gaming setups, Dorood welcome app and more.",
      fa: "اسکریپت‌های اختصاصی پارچ مانند waydroid-helper، تنظیمات گیمینگ، برنامه خوش‌آمدگویی درود و ابزارهای بیشتر."
    }
  },
  {
    icon: Smartphone,
    title: {
      en: "Waydroid & Android Apps",
      fa: "اجرای برنامه‌های اندروید"
    },
    desc: {
      en: "Run Android applications seamlessly with Waydroid easy setup with our helper script.",
      fa: "اجرای روان برنامه‌های اندروید با وی‌دروید نصب آسان با اسکریپت اختصاصی ما."
    }
  },
  {
    icon: Users,
    title: {
      en: "Active Persian Community",
      fa: "جامعه پارسی‌زبان فعال"
    },
    desc: {
      en: "One of the most vibrant Persian Linux communities with forum, Matrix rooms, wiki and constant contributions.",
      fa: "یکی از فعال‌ترین جوامع لینوکس پارسی‌زبان با انجمن، اتاق‌های ماتریکس، ویکی و مشارکت مداوم کاربران."
    }
  },
];

export default featuresData;