import React, {useState} from 'react';

const Board = (props) => {
  const [boards, setBoards] = useState([
    {
      id: 1,
      title: "Do",
      items: [{id: 1, title: 'Go to shop'}, {id: 2, title: 'Throw garbage'},
        {id: 3, title: 'Eat'}]
    },
    {
      id: 2,
      title: "Did",
      items: [{id: 4, title: 'Go to shop'}, {id: 5, title: 'Throw garbage'},
        {id: 6, title: 'Eat'}]
    },
    {
      id: 3,
      title: "Will do",
      items: [{id: 7, title: 'Go to shop'}, {id: 8, title: 'Throw garbage'},
        {id: 9, title: 'Eat'}]
    }
  ])

  // const drop = e => {
  //   e.preventDefault();
  //   const card_id = e.dataTransfer.getData('card_id');
  //
  //   const card = document.getElementById(card_id);
  //   card.style.display = 'block';
  //   e.target.appendChild(card);
  // }
  //
  // const dragOver = e => {
  //   e.preventDefault();
  // }

  return (
    // <div id={props.id}
    //      onDrop={drop}
    //      onDragOver={dragOver}
    //      className={props.className}>
    //   {props.children}
    // </div>
    <div className='app'>
      {boards.map(board =>
        <div className='board'>
          <div className="board__title">{board.title}</div>
          {board.items.map(item =>
            <div className='item'>{item.title}</div>)}
        </div>
      )}
    </div>
  );
};

export default Board;