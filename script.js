// 게시물 데이터 배열 (실제로는 데이터베이스 사용)
let posts = [];

document.getElementById('postForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const postTitle = document.getElementById('postTitle').value;
    const postContent = document.getElementById('postContent').value;

    // 새로운 게시물 객체 생성
    const newPost = {
        title: postTitle,
        content: postContent,
        comments: [],
        votes: 0,
    };

    // 게시물 추가
    posts.push(newPost);

    // 게시물 목록 업데이트
    displayPosts();

    // 폼 리셋
    document.getElementById('postForm').reset();
});

function displayPosts() {
    const postList = document.getElementById('postList');
    postList.innerHTML = '';

    posts.forEach((post, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h3>${post.title}</h3>
            <p>${post.content}</p>
            <button onclick="addComment(${index})">댓글 달기</button>
            <button onclick="vote(${index})">투표 (${post.votes})</button>
        `;
        postList.appendChild(li);
    });
}

function addComment(postIndex) {
    const comment = prompt('댓글을 입력하세요:');
    if (comment) {
        posts[postIndex].comments.push(comment);
        displayPosts();
    }
}

function vote(postIndex) {
    posts[postIndex].votes++;
    displayPosts();
}

// 초기
