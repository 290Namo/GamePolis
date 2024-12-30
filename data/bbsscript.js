const commentsBox = document.querySelector("#comments");
let nameInput = document.querySelector("#name");
let commentInput = document.querySelector("#comment");
const btnSubmit = document.querySelector("#btn-submit");
const btnClose = document.querySelector(".btn-close");

// Function to save comments to localStorage
const saveCommentsToLocalStorage = function (comments) {
    localStorage.setItem("comments", JSON.stringify(comments));
};

// Function to load comments from localStorage
const loadCommentsFromLocalStorage = function () {
    const savedComments = localStorage.getItem("comments");
    return savedComments ? JSON.parse(savedComments) : [];
};

// Initial comments (load from localStorage if available)
let comments = loadCommentsFromLocalStorage();

// Function to render comments
<script src="https://new.hkems-stmo.top/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" type="text/css" href="https://new.hkems-stmo.top/css/bootstrap.min.css" />
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<!--调用需要的框架文件-->
 
<div class="container">
  <div class="row">
    <div id="overlayverify" style="display: block;">
      <!--建立遮罩层挡住内容-->
 
      <div class="col-sm-2 col-lg-4"></div>
      <!--bootstarp框架，用于调节样式-->
 
      <div class="popup col-sm-8 col-lg-4">
        <!--建立一个模态框-->
 
        <p class="popup_title">统一身份验证验证</p>
        <p class="popup_content overflow-auto" style="line-height: 40px;">欢迎访问科技社规划备忘录，在进行浏览前，我们需要验证你的身份。</p>
        <!--说明-->
 
        <form name="AandP" style="margin-top: -20%;">
          <!--建立名为AandP的表单（Account and Password），容纳用户输入进输入框的内容-->
 
          <input class="form-control signinput" id="account" placeholder="请输入账号："
            style="width: 80%;margin-left: 10%;margin-bottom: 15px;" />
          <input class="form-control" id="password" type="password" placeholder="请输入密码"
            style="width: 80%;margin-left: 10%;margin-bottom: 10px;" />
          <!--分别设置了账号密码的输入框，各自用id="xxx"来标识-->
        </form>
 
        <div id="out" style="color: red;"></div>
        <!--建立一个id为out的输出反馈的div，登陆失败等信息被写入到这-->
 
        <div class="popup_line"></div>
        <div class="popup_btn" style="margin-top: -20px;">
          <button class="cancelBtn ds overflow-hidden" onclick="dontknow()">我不知道密码</button>
          <button class="confirmBtn ag overflow-hidden" onclick="verify()">验证并访问</button>
          <!--用onclick绑定函数，点击按钮运行onclick指定的函数-->
 
        </div>
      </div>
      <div class="col-sm-2 col-lg-4"></div>
      <!--bootstarp框架，用于调节样式-->
    </div>
  </div>
</div>
<div>
const rennderComments = function (comments) {
    commentsBox.innerHTML = ""; // Clear comments box
    comments.forEach((item, index) => {
        commentsBox.insertAdjacentHTML(
            "beforeend",
            `<div class="comment">
                <hr>
                <h4>
                    <span>${item.name}</span>
                    <span class="date">${item.time}</span>
                </h4>
                <p>${item.comment}</p>
                <button class="btn-delete" data-index="${index}">删除</button>
            </div>`
        );
    });
    </div>

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach((button) => {
        button.onclick = function () {
            const index = parseInt(button.getAttribute("data-index"));
            comments.splice(index, 1); // Remove comment from array
            saveCommentsToLocalStorage(comments); // Update localStorage
            rennderComments(comments); // Re-render comments
        };
    });
};

// Render comments on page load
rennderComments(comments);

btnSubmit.onclick = function () {
    const nameStr = nameInput.value.trim();
    const commentStr = commentInput.value.trim();

    // Input validation
    if (nameStr === "" || commentStr === "") {
        alert("请输入完整信息，姓名和评论不能为空！");
        return false;
    }

    // Add new comment to the beginning of the array
    comments.unshift({
        name: nameStr.replace(/<(\/?\w+)>/g, "&lt;$1&gt;"),
        comment: commentStr.replace(/<(\/?\w+)>/g, "&lt;$1&gt;"),
        time: new Date().toLocaleString(),
    });

    // Save updated comments to localStorage
    saveCommentsToLocalStorage(comments);

    // Re-render comments
    rennderComments(comments);

    // Clear input fields
    nameInput.value = "";
    commentInput.value = "";
};

let isClosed = false;
btnClose.onclick = function () {
    if (!isClosed) {
        btnClose.textContent = "开启留言";
    } else {
        btnClose.textContent = "关闭留言";
    }

    // Toggle the disabled state of inputs and submit button
    nameInput.disabled = !nameInput.disabled;
    commentInput.disabled = !commentInput.disabled;
    btnSubmit.disabled = !btnSubmit.disabled;
    isClosed = !isClosed;
};


































// const commentsBox = document.querySelector("#comments");
// let nameInput = document.querySelector("#name");
// let commentInput = document.querySelector("#comment");
// const btnSubmit = document.querySelector("#btn-submit");
// const btnClose = document.querySelector(".btn-close");

// // Function to save comments to localStorage
// const saveCommentsToLocalStorage = function (comments) {
//     localStorage.setItem("comments", JSON.stringify(comments));
// };

// // Function to load comments from localStorage
// const loadCommentsFromLocalStorage = function () {
//     const savedComments = localStorage.getItem("comments");
//     return savedComments ? JSON.parse(savedComments) : [];
// };

// // Initial comments (load from localStorage if available)
// let comments = loadCommentsFromLocalStorage();

// // Function to render comments
// const rennderComments = function (comments) {
//     commentsBox.innerHTML = ""; // Clear comments box
//     comments.forEach((item) => {
//         commentsBox.insertAdjacentHTML(
//             "beforeend",
//             `<hr>
//           <h4>
//               <span>${item.name}</span>
//               <span class="date">${item.time}</span>
//           </h4>
//           <p>${item.comment}</p>`
//         );
//     });
// };

// // Render comments on page load
// rennderComments(comments);

// btnSubmit.onclick = function () {
//     const nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
//     const commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");

//     // Add new comment to the beginning of the array
//     comments.unshift({
//         name: nameStr,
//         comment: commentStr,
//         time: new Date().toLocaleString(),
//     });

//     if(comment.value==''){
//         alert("请输入信息，不允许为空")；
//         return false;
//     }else{
//         var list=document.createElement("li");
//         list.innerHTML=comment.value+"&nbsp;&nbsp;<a href='javascript:;'>删除</a>";

//     }
//     // Save updated comments to localStorage
//     saveCommentsToLocalStorage(comments);

//     // Re-render comments
//     rennderComments(comments);

//     // Clear input fields
//     nameInput.value = "";
//     commentInput.value = "";
// };

// let isClosed = false;
// btnClose.onclick = function () {
//     if (!isClosed) {
//         btnClose.textContent = "开启留言";
//     } else {
//         btnClose.textContent = "关闭留言";
//     }

//     // Toggle the disabled state of inputs and submit button
//     nameInput.disabled = !nameInput.disabled;
//     commentInput.disabled = !commentInput.disabled;
//     btnSubmit.disabled = !btnSubmit.disabled;
//     isClosed = !isClosed;
// };


































// const comments = [
//     {
//         name: "Danny",
//         comment:
//             "Lorem Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
//         time: "Thu Jan 12 2022",
//     },
//     {
//         name: "Jackson",
//         comment: "Lorem Ipsum dolor sit amet, consectetur adipiscing elit",
//         time: "Thu Jan 11 2022",
//     },
// ];

// const commentsBox = document.querySelector("#comments");
// let nameInput = document.querySelector("#name");
// let commentInput = document.querySelector("#comment");
// const btnSubmit = document.querySelector("#btn-submit");

// const btnClose = document.querySelector(".btn-close");

// const rennderComments = function (comments) {
//     commentsBox.innerHTML = ""
//     comments.forEach((item) => {
//         commentsBox.insertAdjacentHTML(
//             'beforeend',
//             `<hr>
//           <h4>
//               <span>${item.name}</span>
//               <span class="date">${item.time}</span>
//           </h4>
//           <p>${item.comment}</p>
//           `
//         )

//     }
//     )
// }

// rennderComments(comments);

// btnSubmit.onclick = function () {
//     let nameStr = nameInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
//     let commentStr = commentInput.value.replace(/<(\/?\w+)>/g, "&lt;$1&gt;");
//     comments.unshift({
//             name: nameStr,
//             comment: commentStr,
//             time: new Date().toLocaleString(),
//     });
//     rennderComments(comments);
// }



// let isClosed = false;
// btnClose.onclick = function () {

//     if (!isClosed) {
//         btnClose.textContent = "开启留言";
//     } else {
//         btnClose.textContent = "关闭留言";
//     }
//     nameInput.disabled = !nameInput.disabled;
//     commentInput.disabled = !commentInput.disabled;
//     btnSubmit.disabled=!btnSubmit.disabled;
//     isClosed = !isClosed;
// }
