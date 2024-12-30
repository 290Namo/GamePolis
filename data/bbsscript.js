const commentsBox = document.querySelector("#comments");
let nameInput = document.querySelector("#name");
let commentInput = document.querySelector("#comment");
const btnSubmit = document.querySelector("#btn-submit");
const btnClose = document.querySelector(".btn-close");

// 用户身份验证（此处使用简单的密码验证）
const adminPassword = "yourPassword"; // 设置一个简单的密码，用于身份验证

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
const renderComments = function (comments) {
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

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach((button) => {
        button.onclick = function () {
            const index = parseInt(button.getAttribute("data-index"));

            // Prompt for password verification before deleting
            const password = prompt("请输入密码以删除评论：");

            if (password === adminPassword) {
                comments.splice(index, 1); // Remove comment from array
                saveCommentsToLocalStorage(comments); // Update localStorage
                renderComments(comments); // Re-render comments
            } else {
                alert("密码错误，无法删除评论！");
            }
        };
    });
};

// Render comments on page load
renderComments(comments);

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
    renderComments(comments);

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
