import { marked } from "marked"

const en = `
# Whitepaper
Everything about Parch Linux.

## ParchLinux: A Comprehensive Whitepaper

### Executive Summary
ParchLinux, which stands for Persian Arch, is a Linux distribution based on the popular and versatile Arch Linux. It aims to provide a streamlined, user-friendly experience while maintaining the customizability and performance that Arch Linux is known for. This whitepaper explores the motivations behind ParchLinux, its unique features, target audience, architecture, and future roadmap, including the introduction of exclusive applications like Parch Store and other Parch core applications.

### Table of Contents
1. Introduction
   - Purpose of ParchLinux
   - Why Arch Linux?
2. Unique Features of ParchLinux
   - User-Friendly Installation
   - Preconfigured Desktop Environments
   - Optimized Performance
   - Extensive Software Repository
   - Parch Store and Core Applications
3. Target Audience
   - Beginners
   - Advanced Users
   - Developers
4. System Architecture
   - Core Components
   - Package Management
   - Security Features
5. Installation and Configuration
   - Installation Process
   - Default Configurations
   - Customization Options
6. Use Cases
   - Personal Use
   - Development Environment
   - Educational Purposes
7. Community and Support
   - Community Engagement
   - Support Channels
   - Documentation
8. Future Roadmap
   - Upcoming Features
   - Long-term Goals
9. Conclusion
   - Summary of Benefits
   - Call to Action

### 1. Introduction

#### Purpose of ParchLinux
ParchLinux was created to bridge the gap between the simplicity and ease-of-use desired by beginners and the powerful, customizable environment preferred by advanced users. By leveraging the strengths of Arch Linux, ParchLinux provides a robust platform suitable for a wide range of use cases. The name "ParchLinux" reflects its Persian roots, aiming to offer a unique cultural touch alongside technical excellence.

#### Why Arch Linux?
Arch Linux is known for its simplicity, transparency, and cutting-edge software. It follows a rolling release model, ensuring users always have access to the latest software updates. However, Arch Linux can be challenging for new users due to its manual installation process and lack of a default graphical user interface. ParchLinux addresses these challenges by offering a simplified installation process and preconfigured environments.

### 2. Unique Features of ParchLinux

#### User-Friendly Installation
One of the main barriers for new users trying Arch Linux is its complex installation process. ParchLinux offers a straightforward, graphical installer that guides users through the installation, making it accessible even for those with limited technical expertise.

#### Preconfigured Desktop Environments
ParchLinux comes with several preconfigured desktop environments, such as GNOME, KDE Plasma, and XFCE. This allows users to start using the system immediately after installation, with a polished and fully functional desktop.

#### Optimized Performance
Performance optimization is a core focus of ParchLinux. The distribution includes tweaks and configurations out-of-the-box that enhance system performance, making it suitable for both high-end and older hardware.

#### Extensive Software Repository
Leveraging Arch Linux’s extensive repository and the Arch User Repository (AUR), ParchLinux users have access to a vast selection of software packages. This ensures that users can find and install the tools they need for their specific requirements.

#### Parch Store and Core Applications
To enhance user experience and offer unique features, ParchLinux plans to introduce Parch Store and other Parch core applications. Parch Store will serve as a centralized platform for managing software installations and updates, providing an intuitive and user-friendly interface. Additionally, Parch core applications will include essential tools and utilities developed specifically for ParchLinux users.

### 3. Target Audience

#### Beginners
ParchLinux is ideal for users new to Linux who are looking for a simple, intuitive experience without sacrificing the power and flexibility of Arch Linux.

#### Advanced Users
Experienced Linux users who appreciate the control and customization offered by Arch Linux will find ParchLinux to be a streamlined, hassle-free version of their favorite distribution.

#### Developers
Developers benefit from the cutting-edge software and tools available on ParchLinux, making it a perfect platform for software development and testing.

### 4. System Architecture

#### Core Components
ParchLinux inherits the core components of Arch Linux, including the Linux kernel, systemd for system and service management, and the Pacman package manager.

#### Package Management
Pacman is a powerful package manager that handles installation, updates, and removal of software packages. ParchLinux also supports the Arch User Repository (AUR), giving users access to community-maintained packages.

#### Security Features
ParchLinux includes several security enhancements, such as preconfigured firewall settings, regular security updates, and support for encryption, ensuring that user data remains secure.

### 5. Installation and Configuration

#### Installation Process
The ParchLinux installer is designed to be user-friendly and efficient. Users can choose from various installation options, including automatic partitioning, desktop environment selection, and additional software packages.

#### Default Configurations
Upon installation, ParchLinux provides a fully configured system with a selected desktop environment, preinstalled applications, and essential system settings optimized for performance and usability.

#### Customization Options
Users have the flexibility to customize their ParchLinux installation to meet their specific needs. From choosing different desktop environments to installing additional software and tweaking system settings, ParchLinux supports a high degree of customization.

### 6. Use Cases

#### Personal Use
For personal use, ParchLinux offers a reliable and user-friendly operating system that can handle everyday tasks such as web browsing, multimedia consumption, and office productivity.

#### Development Environment
ParchLinux is well-suited for developers, offering a robust environment with access to the latest development tools and libraries, facilitating efficient coding, testing, and deployment.

#### Educational Purposes
Educational institutions can leverage ParchLinux as a learning platform for teaching Linux system administration, programming, and open-source software development.

### 7. Community and Support

#### Community Engagement
ParchLinux fosters a vibrant community where users can share knowledge, contribute to development, and collaborate on projects. Community forums, mailing lists, and social media groups are key engagement platforms.

#### Support Channels
Users can seek help through various support channels, including official documentation, community forums, and dedicated support teams. Regular updates and comprehensive guides are provided to assist users.

#### Documentation
Extensive documentation is available to help users get started with ParchLinux, troubleshoot issues, and customize their systems. This includes installation guides, user manuals, and FAQs.

### 8. Future Roadmap

#### Upcoming Features
ParchLinux plans to introduce new features such as enhanced hardware support, additional preconfigured desktop environments, more user-friendly tools for system management and customization, and the much-anticipated Parch Store and core applications.

#### Long-term Goals
The long-term vision for ParchLinux includes becoming a leading Arch-based distribution by continually improving user experience, expanding the community, and contributing to the open-source ecosystem. Future developments will focus on integrating more Parch-specific tools and enhancing system stability and performance.

### 9. Conclusion

#### Summary of Benefits
ParchLinux combines the power and flexibility of Arch Linux with user-friendly features, making it an ideal choice for both new and experienced users. With its easy installation process, preconfigured environments, extensive software repository, and unique Parch core applications, ParchLinux stands out as a versatile and efficient Linux distribution.

#### Call to Action
Join the ParchLinux community today and experience the best of Arch Linux without the complexity. Visit our website to download the latest version, participate in community discussions, and contribute to the project. Be a part of shaping the future of ParchLinux by sharing your feedback and ideas.

---

By providing a balanced combination of ease-of-use and advanced capabilities, ParchLinux aims to be the go-to Linux distribution for a wide range of users, from beginners to developers. This whitepaper highlights the strengths and potential of ParchLinux, inviting users and contributors to be a part of its journey.
`

const fa = `
# وایت‌پیپر
همه چیز درباره پارچ لینوکس.

## پارچ‌لینوکس: یک وایت‌پیپر جامع

### خلاصه اجرایی
پارچ‌لینوکس، که مخفف "پرشین آرچ" است، یک توزیع لینوکس مبتنی بر آرچ لینوکس محبوب و چندمنظوره می‌باشد. هدف آن ارائه تجربه‌ای ساده و کاربرپسند است در حالی که قابلیت سفارشی‌سازی و عملکردی که آرچ لینوکس به آن معروف است را حفظ می‌کند. این وایت‌پیپر به بررسی انگیزه‌های پشت پارچ‌لینوکس، ویژگی‌های منحصر به فرد آن، مخاطبان هدف، معماری و نقشه راه آینده، از جمله معرفی برنامه‌های انحصاری مانند پارچ استور و سایر برنامه‌های اصلی پارچ می‌پردازد.

### فهرست مطالب
1. مقدمه
   - هدف پارچ‌لینوکس
   - چرا آرچ لینوکس؟
2. ویژگی‌های منحصر به فرد پارچ‌لینوکس
   - نصب کاربرپسند
   - محیط‌های دسکتاپ پیش‌پیکربندی شده
   - عملکرد بهینه
   - مخزن نرم‌افزاری گسترده
   - پارچ استور و برنامه‌های اصلی
3. مخاطبان هدف
   - مبتدیان
   - کاربران پیشرفته
   - توسعه‌دهندگان
4. معماری سیستم
   - اجزای اصلی
   - مدیریت بسته
   - ویژگی‌های امنیتی
5. نصب و پیکربندی
   - فرآیند نصب
   - پیکربندی‌های پیش‌فرض
   - گزینه‌های سفارشی‌سازی
6. موارد استفاده
   - استفاده شخصی
   - محیط توسعه
   - اهداف آموزشی
7. جامعه و پشتیبانی
   - مشارکت جامعه
   - کانال‌های پشتیبانی
   - مستندات
8. نقشه راه آینده
   - ویژگی‌های آینده
   - اهداف بلندمدت
9. نتیجه‌گیری
   - خلاصه مزایا
   - دعوت به عمل

### 1. مقدمه

#### هدف پارچ‌لینوکس
پارچ‌لینوکس برای پر کردن شکاف بین سادگی و سهولت استفاده‌ای که مبتدیان به دنبال آن هستند و محیط قدرتمند و قابل سفارشی‌سازی که کاربران پیشرفته ترجیح می‌دهند، ایجاد شده است. با بهره‌گیری از نقاط قوت آرچ لینوکس، پارچ‌لینوکس یک پلتفرم قوی مناسب برای طیف وسیعی از موارد استفاده را فراهم می‌کند. نام "پارچ‌لینوکس" ریشه‌های فارسی آن را منعکس می‌کند و هدف آن ارائه یک لمس فرهنگی منحصر به فرد در کنار برتری فنی است.

#### چرا آرچ لینوکس؟
آرچ لینوکس به خاطر سادگی، شفافیت و نرم‌افزارهای پیشرفته‌اش شناخته شده است. این توزیع از مدل انتشار پیوسته پیروی می‌کند و اطمینان می‌دهد که کاربران همیشه به آخرین به‌روزرسانی‌های نرم‌افزاری دسترسی دارند. با این حال، آرچ لینوکس می‌تواند برای کاربران جدید به دلیل فرآیند نصب دستی و عدم وجود یک رابط کاربری گرافیکی پیش‌فرض چالش‌برانگیز باشد. پارچ‌لینوکس این چالش‌ها را با ارائه یک فرآیند نصب ساده و محیط‌های پیش‌پیکربندی شده برطرف می‌کند.

### 2. ویژگی‌های منحصر به فرد پارچ‌لینوکس

#### نصب کاربرپسند
یکی از موانع اصلی برای کاربران جدیدی که سعی در استفاده از آرچ لینوکس دارند، فرآیند پیچیده نصب آن است. پارچ‌لینوکس یک نصب‌کننده گرافیکی ساده ارائه می‌دهد که کاربران را در طول فرآیند نصب راهنمایی می‌کند و آن را برای افرادی که تجربه فنی محدودی دارند، قابل دسترسی می‌سازد.

#### محیط‌های دسکتاپ پیش‌پیکربندی شده
پارچ‌لینوکس با چندین محیط دسکتاپ پیش‌پیکربندی شده، مانند GNOME، KDE Plasma و XFCE ارائه می‌شود. این به کاربران اجازه می‌دهد بلافاصله پس از نصب از سیستم استفاده کنند و یک دسکتاپ کامل و کارآمد داشته باشند.

#### عملکرد بهینه
بهینه‌سازی عملکرد یکی از تمرکزهای اصلی پارچ‌لینوکس است. این توزیع شامل تنظیمات و پیکربندی‌هایی است که به‌طور پیش‌فرض عملکرد سیستم را بهبود می‌بخشد و آن را برای سخت‌افزارهای پیشرفته و قدیمی مناسب می‌سازد.

#### مخزن نرم‌افزاری گسترده
با بهره‌گیری از مخزن گسترده آرچ لینوکس و مخزن کاربر آرچ (AUR)، کاربران پارچ‌لینوکس به انتخاب وسیعی از بسته‌های نرم‌افزاری دسترسی دارند. این اطمینان می‌دهد که این اطمینان می‌دهد که کاربران می‌توانند ابزارهای مورد نیاز خود را برای نیازهای خاصشان پیدا و نصب کنند.

#### پارچ استور و برنامه‌های اصلی
برای بهبود تجربه کاربری و ارائه ویژگی‌های منحصر به فرد، پارچ‌لینوکس قصد دارد پارچ استور و سایر برنامه‌های اصلی پارچ را معرفی کند. پارچ استور به عنوان یک پلتفرم متمرکز برای مدیریت نصب و به‌روزرسانی نرم‌افزار عمل خواهد کرد و یک رابط کاربری شهودی و کاربرپسند ارائه می‌دهد. علاوه بر این، برنامه‌های اصلی پارچ شامل ابزارها و امکانات ضروری است که به‌طور خاص برای کاربران پارچ‌لینوکس توسعه یافته‌اند.

### 3. مخاطبان هدف

#### مبتدیان
پارچ‌لینوکس برای کاربرانی که به تازگی با لینوکس آشنا شده‌اند و به دنبال یک تجربه ساده و شهودی هستند، ایده‌آل است و در عین حال قدرت و انعطاف‌پذیری آرچ لینوکس را فدای نمی‌کند.

#### کاربران پیشرفته
کاربران با تجربه لینوکس که از کنترل و سفارشی‌سازی ارائه شده توسط آرچ لینوکس قدردانی می‌کنند، پارچ‌لینوکس را به عنوان نسخه‌ای ساده و بدون دردسر از توزیع محبوب خود خواهند یافت.

#### توسعه‌دهندگان
توسعه‌دهندگان از نرم‌افزارها و ابزارهای پیشرفته موجود در پارچ‌لینوکس بهره‌مند می‌شوند و این توزیع را به یک پلتفرم مناسب برای توسعه و آزمایش نرم‌افزار تبدیل می‌کند.

### 4. معماری سیستم

#### اجزای اصلی
پارچ‌لینوکس اجزای اصلی آرچ لینوکس را به ارث می‌برد، از جمله هسته لینوکس، systemd برای مدیریت سیستم و خدمات، و مدیر بسته Pacman.

#### مدیریت بسته
Pacman یک مدیر بسته قدرتمند است که نصب، به‌روزرسانی و حذف بسته‌های نرم‌افزاری را مدیریت می‌کند. پارچ‌لینوکس همچنین از مخزن کاربر آرچ (AUR) پشتیبانی می‌کند و به کاربران دسترسی به بسته‌های نگهداری شده توسط جامعه را می‌دهد.

#### ویژگی‌های امنیتی
پارچ‌لینوکس شامل چندین بهبود امنیتی است، مانند تنظیمات پیش‌پیکربندی شده فایروال، به‌روزرسانی‌های امنیتی منظم و پشتیبانی از رمزگذاری، که اطمینان می‌دهد داده‌های کاربر ایمن باقی بماند.

### 5. نصب و پیکربندی

#### فرآیند نصب
نصب‌کننده پارچ‌لینوکس به گونه‌ای طراحی شده است که کاربرپسند و کارآمد باشد. کاربران می‌توانند از گزینه‌های مختلف نصب، از جمله پارتیشن‌بندی خودکار، انتخاب محیط دسکتاپ و بسته‌های نرم‌افزاری اضافی، انتخاب کنند.

#### پیکربندی‌های پیش‌فرض
پس از نصب، پارچ‌لینوکس یک سیستم کاملاً پیکربندی شده با یک محیط دسکتاپ انتخاب شده، برنامه‌های پیش‌نصب شده و تنظیمات اساسی سیستم بهینه‌سازی شده برای عملکرد و قابلیت استفاده ارائه می‌دهد.

#### گزینه‌های سفارشی‌سازی
کاربران این امکان را دارند که نصب پارچ‌لینوکس خود را به گونه‌ای سفارشی‌سازی کنند که نیازهای خاصشان را برآورده کند. از انتخاب محیط‌های دسکتاپ مختلف تا نصب نرم‌افزارهای اضافی و تنظیمات سیستم، پارچ‌لینوکس از درجه بالایی از سفارشی‌سازی پشتیبانی می‌کند.

### 6. موارد استفاده

#### استفاده شخصی
برای استفاده شخصی، پارچ‌لینوکس یک سیستم‌عامل قابل اعتماد و کاربرپسند ارائه می‌دهد که می‌تواند وظایف روزمره‌ای مانند مرور وب، مصرف چندرسانه‌ای و بهره‌وری اداری را مدیریت کند.

#### محیط توسعه
پارچ‌لینوکس برای توسعه‌دهندگان بسیار مناسب است و یک محیط قوی با دسترسی به جدیدترین ابزارها و کتابخانه‌های توسعه را فراهم می‌کند و کدنویسی، آزمایش و استقرار را تسهیل می‌کند.

#### اهداف آموزشی
مؤسسات آموزشی می‌توانند از پارچ‌لینوکس به عنوان یک پلتفرم یادگیری برای آموزش مدیریت سیستم لینوکس، برنامه‌نویسی و توسعه نرم‌افزارهای متن‌باز استفاده کنند.

### 7. جامعه و پشتیبانی

#### مشارکت جامعه
پارچ‌لینوکس یک جامعه پرجنب و جوش را ترویج می‌کند که در آن کاربران می‌توانند دانش خود را به اشتراک بگذارند، در توسعه مشارکت کنند و در پروژه‌ها همکاری کنند. انجمن‌های جامعه، لیست‌های پستی و گروه‌های رسانه‌های اجتماعی از جمله پلتفرم‌های کلیدی برای مشارکت هستند.

#### کانال‌های پشتیبانی
کاربران می‌توانند از طریق کانال‌های مختلف پشتیبانی، از جمله مستندات رسمی، انجمن‌های جامعه و تیم‌های پشتیبانی اختصاصی، کمک بگیرند. به‌روزرسانی‌های منظم و راهنماهای جامع برای کمک به کاربران ارائه می‌شود.

#### مستندات
مستندات گسترده‌ای برای کمک به کاربران در شروع کار با پارچ‌لینوکس، عیب‌یابی مشکلات و سفارشی‌سازی سیستم‌هایشان در دسترس است. این شامل راهنماهای نصب، راهنماهای کاربری و سوالات متداول (FAQs) می‌باشد.

### 8. نقشه راه آینده

#### ویژگی‌های آینده
پارچ‌لینوکس قصد دارد ویژگی‌های جدیدی مانند پشتیبانی بهبود یافته از سخت‌افزار، محیط‌های دسکتاپ پیش‌پیکربندی شده اضافی، ابزارهای کاربرپسندتر برای مدیریت سیستم و سفارشی‌سازی، و پارچ استور و برنامه‌های اصلی مورد انتظار را معرفی کند.

#### اهداف بلندمدت
چشم‌انداز بلندمدت پارچ‌لینوکس شامل تبدیل شدن به یک توزیع پیشرو مبتنی بر آرچ با بهبود مستمر تجربه کاربری، گسترش جامعه و مشارکت در اکوسیستم متن‌باز است. توسعه‌های آینده بر ادغام ابزارهای خاص پارچ و بهبود ثبات و عملکرد سیستم تمرکز خواهد کرد.

### 9. نتیجه‌گیری

#### خلاصه مزایا
پارچ‌لینوکس قدرت و انعطاف‌پذیری آرچ لینوکس را با ویژگی‌های کاربرپسند ترکیب می‌کند و آن را به انتخاب ایده‌آلی برای کاربران جدید و با تجربه تبدیل می‌کند. با فرآیند نصب آسان، محیط‌های پیش‌پیکربندی شده، مخزن نرم‌افزاری گسترده و برنامه‌های اصلی منحصر به فرد Parch، پارچ‌لینوکس به عنوان یک توزیع لینوکس چندمنظوره و کارآمد شناخته می‌شود.

#### دعوت به عمل
امروز به جامعه پارچ‌لینوکس بپیوندید و بهترین‌های آرچ لینوکس را بدون پیچیدگی تجربه کنید. به وب‌سایت ما مراجعه کنید تا آخرین نسخه را دانلود کنید، در بحث‌های جامعه شرکت کنید و به پروژه کمک کنید. با به اشتراک‌گذاری نظرات و ایده‌های خود، بخشی از شکل‌گیری آینده پارچ‌لینوکس باشید.

---

با ارائه ترکیبی متعادل از سهولت استفاده و قابلیت‌های پیشرفته، پارچ‌لینوکس هدف دارد که توزیع لینوکس مورد نظر برای طیف وسیعی از کاربران، از مبتدیان تا توسعه‌دهندگان، باشد. این وایت‌پیپر نقاط قوت و پتانسیل پارچ‌لینوکس را برجسته می‌کند و از کاربران و مشارکت‌کنندگان دعوت می‌کند که بخشی از سفر آن باشند.
`

export default {
  en: marked.parse(en),
  fa: marked.parse(fa)
}
