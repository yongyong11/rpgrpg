// DOM 요소 가져오기
const usernameSelect = document.getElementById('usernameSelect');
const newPostForm = document.getElementById('newPostForm');
const postList = document.getElementById('postList');

// 사용자 선택 이벤트 리스너
usernameSelect.addEventListener('change', function () {
    const selectedUsername = usernameSelect.value;
    // 선택한 사용자의 작성한 게시물을 불러오는 로직을 추가하세요.
    // 서버 요청 등을 사용하여 해당 사용자의 게시물을 가져올 수 있습니다.
});

// 글 작성 이벤트 리스너
newPostForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;
    const postImage = document.getElementById('postImage').files[0];
    const postVideo = document.getElementById('postVideo').files[0];

    // 게시물 추가 (간단한 예제, 실제로는 백엔드에서 처리)
    const newPost = {
        title: postTitle,
        content: postContent,
        image: postImage,
        video: postVideo,
    };

    addPostToList(newPost);

    // 폼 리셋
    newPostForm.reset();
});

// 게시물 추가 함수
function addPostToList(post) {
    const li = document.createElement('li');
    li.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.content}</p>
        <img src="${post.image ? URL.createObjectURL(post.image) : ''}" alt="게시물 이미지" width="200">
        <video width="320" controls>
            <source src="${post.video ? URL.createObjectURL(post.video) : ''}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    postList.appendChild(li);
}
