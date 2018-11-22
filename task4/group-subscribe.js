const myGroups = []; // массив для хранения подписок на группы

const groupList = [
  { groupName: 'Habrahabr'},
  { groupName: 'Web2018'},
];

/**
 * Функция подписки на группы
 * @param group
 */
function subscribeGroup(group) {
  for(let i = 0; i < groupList.length; i++) {
    if(groupList[i].groupName == group) {
      myGroups.push(group);
    } else {
      console.log('Group '+ i+'  2 does not exist!');
    }
  }
}

console.log(groupList);
/**
 * Функция отписки от группы
 * @param group
 */
function unsubscribeGroup(group) {
  if(myGroups.length == 0){
    console.log('You are not subscribed to anything!');
  } else {
    for(let i = 0; i < myGroups.length; i++) {
      console.log(myGroups[i]);
      if(myGroups[i] == group) {
        myGroups.splice(i, 1);
        console.log('You unsubscribed from the group!');
      } else {
        console.log('Input Error!');
      }
    }
  }
}