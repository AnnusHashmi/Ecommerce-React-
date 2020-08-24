
const INITIAL_STATE = {
  sections: [
    
    {
      title: 'Daughter',
      imageUrl: "https://i.ibb.co/q956dtP/pexels-gustavo-fring-4127354.jpg",
      size: 'large',
      id: 1,
      linkUrl: 'shop/womens'
    },
    {
      title: 'Mother',
      imageUrl: "https://i.ibb.co/XjVpSjs/pexels-daria-obymaha-1683975.jpg",
      size: 'large',
      id: 2,
      linkUrl: 'shop/mens'
    }
  ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
