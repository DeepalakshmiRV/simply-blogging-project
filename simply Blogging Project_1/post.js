function postMain(){
    console.log("Post main active!!")
}

function addPost(){
    function Post(title,content){
        this.title=title
        this.content=content
    }
    let prevPosts=JSON.parse(localStorage.getItem('feedObj'))
    console.log(prevPosts)
    let newPostTitle=document.getElementById('title').value
    let newPostContent=document.getElementById('content').value
    console.log(newPostContent+"dddd"+newPostTitle)
    prevPosts.push(new Post(newPostTitle,newPostContent))
    localStorage.setItem('feedObj',JSON.stringify(prevPosts))
    alert("Post Saved Successfully!!")
    window.location.href = "mainPage.html";
}
setTimeout(postMain,0)