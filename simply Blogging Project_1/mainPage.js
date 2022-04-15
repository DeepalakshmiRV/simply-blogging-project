function main(){
    let feedsDiv=document.getElementById("feeds")
    let posts=[]
    let isAdmin=false
    // feedsDiv.append(document.createTextNode("Hellofrom Feed"))
    console.log("Main is on")
    function Post(title,content){
        this.title=title
        this.content=content
    }
    function initLocalStorage(){
        let postData=localStorage.getItem('feedObj')
        if(postData!=null){
            posts=JSON.parse(postData)
        }else{
            posts.push(new Post("'Not possible': Tennis world saddened by Kim Clijsters announcement"
            ,"Tennis fans have been left saddened after Kim Clijsters announced her retirement from the sport for the third time.The former World No.1 announced on Tuesday that she's retiring once again after her latest comeback was hampered by the Covid-19 pandemic and injuries."))
            posts.push(new Post("'Not possible': Tennis world saddened by Kim Clijsters announcement"
            ,"Tennis fans have been left saddened after Kim Clijsters announced her retirement from the sport for the third time.The former World No.1 announced on Tuesday that she's retiring once again after her latest comeback was hampered by the Covid-19 pandemic and injuries."))
            posts.push(new Post("'Not possible': Tennis world saddened by Kim Clijsters announcement"
            ,"Tennis fans have been left saddened after Kim Clijsters announced her retirement from the sport for the third time.The former World No.1 announced on Tuesday that she's retiring once again after her latest comeback was hampered by the Covid-19 pandemic and injuries."))
            posts.push(new Post("'Not possible': Tennis world saddened by Kim Clijsters announcement"
            ,"Tennis fans have been left saddened after Kim Clijsters announced her retirement from the sport for the third time.The former World No.1 announced on Tuesday that she's retiring once again after her latest comeback was hampered by the Covid-19 pandemic and injuries."))
            localStorage.setItem('feedObj',JSON.stringify(posts))
        }
        let newNode=document.createElement('div')
        if(localStorage.getItem('isAdmin')){
            newNode.innerHTML=`<button class="primary"><a style="align-content: left;" href="postPage.html">new Post</a></button>`
            isAdmin=true
        }
        else{
            isAdmin=false
            newNode.innerHTML=`<a style="align-content: left;" href="adminLoginPage.html">Login</a>`
        }
        document.getElementById('navDiv').appendChild(newNode)
        console.log("isAdmin"+isAdmin)
    }
    function loadFeeds(){
        console.log(posts)
        for(let post of posts){
            let newNode=document.createElement("div")
            newNode.innerHTML=`<div class="card m-5" style="height:150px;width:800px;">
            <div class="card-body">
              <h5 class="card-title">${post.title}</h5>
              <p class="card-text">${post.content}</p>
            </div>
          </div>`
          feedsDiv.appendChild(newNode)
        }
    }
    initLocalStorage()
    loadFeeds()
}



setTimeout(main,0)
