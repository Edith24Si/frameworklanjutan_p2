export default function HelloWorld() {
    const propsUserCard = {
        nama: "Nona",
        nim: "2457301038",
        tanggal: "2025-01-01"
        
    }

    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <GreetingBinjai />
            <QuoteText />

            <UserCard
                nama="Nona"
                nim="2457301038"
                tanggal={new Date().toLocaleDateString()}
                usia={20}
            />
            <UserCard
            {...propsUserCard}
            />
            <img src="img/foto1.jpg" alt="logo"/>
          
        </div>
    )
}

function GreetingBinjai() {
    return (
        <small>Salam dari Binjai 👌 </small>
    )
}

function QuoteText() {
    const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr />
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}

function UserCard(props) {
    return (
        <div>
            <hr />
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
             <p>Usia: {props.usia}</p>
        </div>
    )
}