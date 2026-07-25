*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    background:#070707;
    color:white;
    font-family:Arial, Helvetica, sans-serif;
}

.hero{
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
}

h1{
    font-size:70px;
    color:#ff1744;
    text-shadow:
    0 0 10px #ff1744,
    0 0 30px #ff1744,
    0 0 60px #ff1744;
}

p{
    margin-top:20px;
    font-size:22px;
    color:#ddd;
}

button{

    margin-top:40px;

    padding:15px 40px;

    border:none;

    background:#ff1744;

    color:white;

    border-radius:40px;

    font-size:18px;

    cursor:pointer;

    transition:.3s;
}

button:hover{

    transform:scale(1.08);

    box-shadow:0 0 30px #ff1744;

}
