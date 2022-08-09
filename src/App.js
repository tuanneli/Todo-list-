import './App.css';
import {useState} from "react";
// import Board from "./components/board";
// import Card from "./components/card";

function App() {
  const [board, setBoard] = useState([
    {id: 1, title: 'Go to shop'},
    {id: 2, title: 'Throw garbage'},
    {id: 3, title: 'Eat'},
  ])
  // ,
  // {
  //   id: 2,
  //   title: "Did",
  //   items: [{id: 4, title: 'Go to shop'}, {id: 5, title: 'Throw garbage'},
  //     {id: 6, title: 'Eat'}]
  // },
  // {
  //   id: 3,
  //   title: "Will do",
  //   items: [{id: 7, title: 'Go to shop'}, {id: 8, title: 'Throw garbage'},
  //     {id: 9, title: 'Eat'}]
  // }
  // ])

  // const [currentBoard, setCurrentBoard] = useState(null)
  const [currentItem, setCurrentItem] = useState(null)

  function dragOverHandler(e) {
    e.preventDefault()
    if (e.target.className == 'item todo') {
      e.target.style.boxShadow = '0 4px 3px gray'
    }
  }

  function dragLeaveHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dragStartHandler(e, item) {
    // setCurrentBoard(board)
    setCurrentItem(item)
  }

  function dragEndHandler(e) {
    e.target.style.boxShadow = 'none'
  }

  function dropHandler(e, item) {
    e.target.style.boxShadow = 'none'
    e.preventDefault()
    const currentIndex = board.indexOf(currentItem);
    board.splice(currentIndex, 1);
    const dropIndex = board.indexOf(item);
    board.splice(dropIndex + 1, 0, currentItem);
    setBoard(board.map((item) => {
      return item;
    }))
    // setBoards(boards.map(b => {
    // if (b.id === board.id) {
    //   return board
    // }
    // if (b.id === currentBoard.id) {
    //   return currentBoard;
    // }
    //   return b;
    // }))
  }

  return (
    <div className='app'>
      <div className='board'>
        <div className="board__title">Title</div>
        {board.map(item =>
          <div className='item todo'
               itemID='id'
               draggable={true}
               onDragOver={(e) => dragOverHandler(e)}
               onDragLeave={e => dragLeaveHandler(e)}
               onDragStart={(e) => dragStartHandler(e, item)}
               onDragEnd={(e) => dragEndHandler(e)}
               onDrop={(e) => dropHandler(e, item)}
          >{item.title}</div>)}
      </div>

      {/*<main className="flexbox">*/}

      {/*  <Board id="board-1" className="board">*/}
      {/*    <Card id="card-1" className="card" draggable="true">*/}
      {/*      <p>Card One</p>*/}
      {/*    </Card>*/}
      {/*    <Card id="card-1" className="card" draggable="true">*/}
      {/*      <p>Card Two</p>*/}
      {/*    </Card>*/}
      {/*    <Card id="card-1" className="card" draggable="true">*/}
      {/*      <p>Card Three</p>*/}
      {/*    </Card>*/}
      {/*    <Card id="card-1" className="card" draggable="true">*/}
      {/*      <p>Card Four</p>*/}
      {/*    </Card>*/}
      {/*  </Board>*/}

      {/*  <Board id="board-2" className="board">*/}
      {/*    <Card id="card-2" className="card" draggable="true">*/}
      {/*      <p>Card Two</p>*/}
      {/*    </Card>*/}
      {/*  </Board>*/}

      {/*</main>*/}
    </div>
  );
}

export default App;
