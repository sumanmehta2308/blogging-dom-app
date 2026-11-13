const blogForm = document.getElementById("blogForm");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const contentInput = document.getElementById("content");
const blogList = document.getElementById("blogList");
blogForm.addEventListener("submit", function (event) {
  event.preventDefault(); 
  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const content = contentInput.value.trim();

  const li = document.createElement("li");
  li.className = "blog-item";

  const headerDiv = document.createElement("div");
  headerDiv.className = "blog-header";

  const titleSpan = document.createElement("span");
  titleSpan.className = "blog-title";
  titleSpan.textContent = title;

  const plusBtn = document.createElement("button");
  plusBtn.type = "button";
  plusBtn.className = "plus-btn";
  plusBtn.textContent = "+";
  
  headerDiv.appendChild(titleSpan);
  headerDiv.appendChild(plusBtn);

  const detailsDiv = document.createElement("div");
  detailsDiv.className = "blog-details"; 
  const authorP = document.createElement("p");
  authorP.className = "blog-author";
  authorP.innerHTML = "<strong>Author:</strong> " + author;

  const contentP = document.createElement("p");
  contentP.className = "blog-content";
  contentP.textContent = content;

  
  const deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete Blog";

  deleteBtn.addEventListener("click", function () {
    blogList.removeChild(li); 
  });

  const commentSection = document.createElement("div");
  commentSection.className = "comment-section";

  const commentBox = document.createElement("div");
  commentBox.className = "comment-box";

  const commentInput = document.createElement("input");
  commentInput.type = "text";
  commentInput.placeholder = "Write a comment...";

  const commentBtn = document.createElement("button");
  commentBtn.type = "button";
  commentBtn.className = "comment-btn";
  commentBtn.textContent = "Add Comment";

  const commentList = document.createElement("ul");
  commentList.className = "comment-list";

  commentBtn.addEventListener("click", function () {
    const commentText = commentInput.value.trim();
    if (commentText === "") return;

    const commentLi = document.createElement("li");
    commentLi.textContent = commentText;

    commentList.appendChild(commentLi);
    commentInput.value = ""; 
  });

  commentBox.appendChild(commentInput);
  commentBox.appendChild(commentBtn);
  commentSection.appendChild(commentBox);
  commentSection.appendChild(commentList);

 
  detailsDiv.appendChild(authorP);
  detailsDiv.appendChild(contentP);
  detailsDiv.appendChild(deleteBtn);
  detailsDiv.appendChild(commentSection);

  
  plusBtn.addEventListener("click", function () {
    detailsDiv.classList.toggle("hidden");
  });

  li.appendChild(headerDiv);
  li.appendChild(detailsDiv);
  blogList.appendChild(li);
  blogForm.reset();
});
