const commentsBox = document.querySelector("#comments");
let nameInput = document.querySelector("#name");
let commentInput = document.querySelector("#comment");
const btnSubmit = document.querySelector("#btn-submit");
const btnClose = document.querySelector(".btn-close");
const password = "NikumaruNamo290";  // 预设的删除密码

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
const rennderComments = function (comments) {
    commentsBox.innerHTML = ""; // Clear comments box
    comments.forEach((item, index) => {
        // Render each comment and its replies
        commentsBox.insertAdjacentHTML(
            "beforeend",
            `<div class="comment" data-index="${index}">
                <hr>
                <h4>
                    <span>${item.name}</span>
                    <span class="date">${item.time}</span>
                </h4>
                <p>${item.comment}</p>
                <button class="btn-delete" data-index="${index}">删除</button>
                <button class="btn-reply" data-index="${index}">回复</button>
                <div class="replies">
                    ${item.replies ? item.replies.map(reply => `
                        <div class="reply">
                            <strong>${reply.name}</strong>: ${reply.comment}
                        </div>
                    `).join('') : ''}
                </div>
                <div class="reply-form" style="display:none;">
                    <input type="text" class="reply-name-input" placeholder="输入您的姓名" />
                    <input type="text" class="reply-input" placeholder="回复..." />
                    <button class="btn-submit-reply">提交回复</button>
                </div>
            </div>`
        );
    });

    // Add event listeners to delete buttons
    const deleteButtons = document.querySelectorAll(".btn-delete");
    deleteButtons.forEach((button) => {
        button.onclick = function () {
            const index = parseInt(button.getAttribute("data-index"));
            const enteredPassword = prompt("请输入密码以删除评论");
            if (enteredPassword === password) {
                comments.splice(index, 1); // Remove comment from array
                saveCommentsToLocalStorage(comments); // Update localStorage
                rennderComments(comments); // Re-render comments
            } else {
                alert("密码错误，无法删除评论！");
            }
        };
    });

    // Add event listeners to reply buttons
    const replyButtons = document.querySelectorAll(".btn-reply");
    replyButtons.forEach((button) => {
        button.onclick = function () {
            const index = parseInt(button.getAttribute("data-index"));
            const replyForm = button.parentElement.querySelector(".reply-form");
            replyForm.style.display = "block"; // Show reply input form
        };
    });

    // Add event listeners to submit reply buttons
    const submitReplyButtons = document.querySelectorAll(".btn-submit-reply");
    submitReplyButtons.forEach((button) => {
        button.onclick = function () {
            const commentDiv = button.closest(".comment");
            const index = parseInt(commentDiv.getAttribute("data-index"));
            const replyNameInput = commentDiv.querySelector(".reply-name-input");
            const replyInput = commentDiv.querySelector(".reply-input");
            const replyName = replyNameInput.value.trim() || "匿名"; // Default to "匿名" if no name is entered
            const replyText = replyInput.value.trim();
            
            if (replyText === "") {
                alert("回复内容不能为空！");
                return;
            }

            const reply = {
                name: replyName,  // Use the entered name
                comment: replyText,
                time: new Date().toLocaleString(),
            };

            if (!comments[index].replies) {
                comments[index].replies = [];
            }

            comments[index].replies.push(reply);
            saveCommentsToLocalStorage(comments); // Save updated comments
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
        replies: []  // Initialize an empty array for replies
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
