

const getAllFromLocalDB = ()=>{
    const allFriends = localStorage.getItem('timeline')
    

    if(allFriends) return JSON.parse(allFriends);
    return [];
}


const addToLocalDB = (timeline)=>{
  const friends = getAllFromLocalDB();
  friends.push(timeline);
  localStorage.setItem('timeline', JSON.stringify(friends))
}

export {getAllFromLocalDB,addToLocalDB}