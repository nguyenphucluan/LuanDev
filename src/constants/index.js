import {
    content,
    frontend,
    design,
    javascript,
    html,
    facebook,
    linkedin,
    github,
    css,
    reactjs,
    redux,
    tailwind,
    git,
    figma,
    tdtu,
    lol,
    techshop,
    techstore,
    port,
    finance,
    facebook_ui
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Giới thiệu",
    },
    {
      id: "experience",
      title: "Kinh nghiệm",
    },
    {
      id: "work",
      title: "Dự án",
    },
    {
      id: "contact",
      title: "Liên hệ",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: frontend,
      intro:"Front-End ReactJs"
    },
    {
      title: "UI Design",
      icon: design,
      intro:" Figma "
    },
    {
      title: "Content Creator",
      icon: content,
      intro:"Chia sẻ những điều hay mà mình học hỏi được"
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: frontend,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Google ClassRoom",
      company_name: "Tôn Đức Thắng University",
      icon: tdtu,
      iconBg: "#383E56",
      date: "22.08.2021 - 29.11.2021",
      points: [
        "Dự án mô phỏng trang học tập Google ClassRoom sử dụng ngôn ngữ PHP.",
        "Phân tích thiết kế và triển khai cấu trúc giao diện trang web.",
        "Sử dụng các ngôn ngữ HTML, CSS, Javascript và một số framework hỗ trợ. Sử dụng Bootstrap, Jquery mức độ cơ bản.",
        "Học thêm về ngôn ngữ PHP.",
      ],
      source_code:"https://github.com/nguyenphucluan/GoogleClassRoom"
    },
    {
      title: "Social Media",
      company_name: "Tôn Đức Thắng University",
      icon: tdtu,
      iconBg: "#E6DEDD",
      date: "10.01.2022 - 30.04 2022",
      points: [
        "Trang web mô phỏng mạng xã hội trong quy mô trường học.",
        "Phân tích thiết kế và triển khai cấu trúc giao diện trang web.",
        "Sử dụng các ngôn ngữ HTML, CSS, Javascript và một số framework hỗ trợ. Sử dụng Bootstrap, Jquery mức độ thành thạo hơn.",
        "Học thêm về NodeJs.",
      ],
      source_code:"https://github.com/nguyenphucluan/SocialMedia"
    },
    {
      title: "Wallet Online",
      company_name: "Tôn Đức Thắng University",
      icon: tdtu,
      iconBg: "#383E56",
      date: "15.05.2022 - 10.08.2022",
      points: [
        "Trang web mô phỏng ví điện tử online, có thể nạp rút tiền được admin quản lý.",
        "Phân tích thiết kế và triển khai cấu trúc giao diện trang web.",
        "Sử dụng các ngôn ngữ HTML, CSS, Javascript và một số framework hỗ trợ. Sử dụng Bootstrap, Jquery mức độ thành thạo hơn.",
        "Cải thiện hơn về Nodejs",
      ],
      source_code:"https://github.com/nguyenphucluan/WalletOnline"
    },
  ];
  
  const projects = [
    {
      name: "Tech Shop",
      description:
        "Template trang web bán các sản phẩm công nghệ thuộc nhiều nhãn hàng khác nhau.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "SCSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: techshop,
      source_code_link: "https://github.com/nguyenphucluan/TECHSHOP",
      source_live_demo: "https://nguyenphucluan.github.io/TECHSHOP/",
    },
    {
      name: "Tech Store",
      description:
        "Trang web bán các sản phẩm công nghệ lấy ý tưởng từ trang GearVN.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: techstore,
      source_code_link: "https://github.com/nguyenphucluan/TechStore-template",
      source_live_demo: "https://nguyenphucluan.github.io/TechStore-template/",
    },
    {
      name: "LOL Client",
      description:
        "Mô phòng màn hình đăng nhập của game League Of Legends.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
      ],
      image: lol,
      source_code_link: "https://github.com/nguyenphucluan/LOL-client",
      source_live_demo: "https://nguyenphucluan.github.io/LOL-client/",
    },
    {
      name: "Portfolio Template",
      description:
        "Trang web portfolio đon giản. ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: port,
      source_code_link: "https://github.com/nguyenphucluan/Portfolio-website",
      source_live_demo: "https://nguyenphucluan.github.io/Portfolio-website/",
    },
    {
      name: "Finance Template",
      description:
        "Template trang web về tài chính .",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
      ],
      image: finance,
      source_code_link: "https://github.com/nguyenphucluan/finance-template",
      source_live_demo: "https://nguyenphucluan.github.io/finance-template/",
    },
    {
      name: "Facebook clone Ui",
      description:
        "Facebook clone ui .",
      tags: [
        {
          name: "ReactJs",
          color: "blue-text-gradient",
        },
        {
          name: "TailwindCss",
          color: "green-text-gradient",
        },
        {
          name: "Mui",
          color: "pink-text-gradient",
        },
      ],
      image: facebook_ui,
      source_code_link: "https://github.com/nguyenphucluan/facebook-clone-ui.git",
      source_live_demo: "https://facebook-clone-ui.vercel.app/",
    },
  ];
  const socials =[
    {
      name:"facebook",
      src:facebook,
      href:"https://www.facebook.com/profile.php?id=100015600511705"
    },
    {
      name:"linkedin",
      src:linkedin,
      href:"https://www.linkedin.com/in/nguy%E1%BB%85n-ph%C3%BAc-lu%C3%A2n-2b7937240/"
    },
    {
      name:"github",
      src:github,
      href:"https://github.com/nguyenphucluan"
    },
  ]
  
  export { services, technologies, experiences,socials, projects };