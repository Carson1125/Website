var blogs = [
  {
    title: "GitHub Sponsors",
    subtitle: "Technical blog about GitHub Sponsors",
    author: "Carson Wu",
    date: "10 August 2024",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/August/10_08_2024/GHS.md"
  },
  {
    title: "Utility-beta.github.io",
    subtitle: "Technical blog about Utility-beta.github.io Scheduled Events",
    author: "Carson Wu",
    date: "10 July 2024",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/July/10_07_2024/10072024.md"
  },
  {
    title: "Carson1125",
    subtitle: "Technical blog about carson1125 'v1.1.5.0(004)(1150_004-290624r)' update",
    author: "Carson Wu",
    date: "29 June 2024",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/June/28_06_2024/1150_004-290624r.md"
  },
  {
  title: "A.R.I.E.L.",
      subtitle: "Technical blog about A.R.I.E.L.",
      author: "Carson Wu",
      date: "7 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/07_04_2024/Ariel.md"
    },
    {
      title: "K.R.I.S.T.Y.",
      subtitle: "Announces Setback in Logic-Based Inference System Development",
      author: "Carson Wu",
      date: "4 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/04_04_2024/Kristy.md"
    },
    {
      title: "Carson1125",
      subtitle: "Technical blog about carson1125 'v0.1.0.2 (1002304024b)' update",
      author: "Carson Wu",
      date: "3 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/03_04_2024/carson1125.md"
    },
    {
      title: "NeuralMorse",
      subtitle: "Technical blog about NeuralMorse",
      author: "Carson Wu",
      date: "2 April 2024",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/02_04_2024/NeuralMorse.md"
    }
];

var blogs_zh = [
  {
    title: "GitHub Sponsors",
    subtitle: "有關 GitHub Sponsors 的技術部落格",
    author: "Carson Wu",
    date: "2024年8月10日",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/August/10_08_2024/GHS_zh.md"
  },
  {
    title: "Utility-beta.github.io",
    subtitle: "有關 Utility-beta.github.io 預定活動的技術部落格",
    author: "Carson Wu",
    date: "2024年7月10日",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/July/10_07_2024/10072024_zh.md"
  },
  {
    title: "Carson1125",
    subtitle: "有關 carson1125 'v1.1.5.0(004)(1150_004-290624r)' 更新的技術部落格",
    author: "Carson Wu",
    date: "2024年6月29日",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/June/28_06_2024/1150_002-290624r_zh.md"
  },
  {
    title: "A.R.I.E.L.",
    subtitle: "有關 A.R.I.E.L. 的技術部落格",
    author: "Carson Wu",
    date: "2024年4月7日",
    link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/07_04_2024/Ariel_zh.md"
  },
    {
      title: "K.R.I.S.T.Y.",
      subtitle: "邏輯推理系統開發遭遇挫折",
      author: "Carson Wu",
      date: "2024年4月4日",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/04_04_2024/Kristy_zh.md"
    },
    {
      title: "Carson1125",
      subtitle: "有關 carson1125 'v0.1.0.2（1002304024b）' 更新的技術部落格",
      author: "Carson Wu",
      date: "2024年4月3日",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/03_04_2024/carson1125_zh.md"
    },
    {
      title: "NeuralMorse",
      subtitle: "有關 NeuralMorse 的技術部落格",
      author: "Carson Wu",
      date: "2024年4月2日",
      link: "https://github.com/Carson-We/Documentation/blob/main/Blog/2024/April/02_04_2024/NeuralMorse_zh.md"
    }
];

var blogContainer = document.getElementById("blog-container");

if (blogContainer) {
  blogs.forEach(function (blog) {
    var blogCard = document.createElement("div");
    blogCard.className = "card";

    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;

    var blogSubtitle = document.createElement("h2");
    blogSubtitle.textContent = blog.subtitle;

    var blogAuthor = document.createElement("p");
    blogAuthor.textContent = "By " + blog.author;

    var blogDate = document.createElement("p");
    blogDate.textContent = "Date: " + blog.date;

    var learnMoreButton = document.createElement("button");
    learnMoreButton.className = "btn btn1";
    learnMoreButton.textContent = "Learn More";
    learnMoreButton.addEventListener("click", function () {
      window.open(blog.link, "_blank");
    });

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogSubtitle);
    blogCard.appendChild(blogAuthor);
    blogCard.appendChild(blogDate);
    blogCard.appendChild(learnMoreButton);

    blogContainer.appendChild(blogCard);
  });
}

var blogContainer_zh = document.getElementById("blog-container_zh");

if (blogContainer_zh) {
  blogs_zh.forEach(function (blog_zh) {
    var blogCard = document.createElement("div");
    blogCard.className = "card";

    var blogTitle = document.createElement("h1");
    blogTitle.textContent = blog_zh.title;

    var blogSubtitle = document.createElement("h2");
    blogSubtitle.textContent = blog_zh.subtitle;

    var blogAuthor = document.createElement("p");
    blogAuthor.textContent = "By " + blog_zh.author;

    var blogDate = document.createElement("p");
    blogDate.textContent = "Date: " + blog_zh.date;

    var learnMoreButton = document.createElement("button");
    learnMoreButton.className = "btn btn1";
    learnMoreButton.textContent = "了解更多";
    learnMoreButton.addEventListener("click", function () {
      window.open(blog_zh.link, "_blank");
    });

    blogCard.appendChild(blogTitle);
    blogCard.appendChild(blogSubtitle);
    blogCard.appendChild(blogAuthor);
    blogCard.appendChild(blogDate);
    blogCard.appendChild(learnMoreButton);

    blogContainer_zh.appendChild(blogCard);
  });
}
