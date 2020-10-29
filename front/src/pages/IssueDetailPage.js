import React, {useReducer} from 'react';
import { useParams } from 'react-router-dom';
import IssueTitle from "../components/IssueTitle";
import IssueStatusChangeButton from "../components/IssueStatusChangeButton";
import { useContext } from 'react';

export const IssueContext = React.createContext();

function reducer(state, action) {
  switch(action.type) {
    case 'toggle_status':
      //닫힌 이슈는 다시 열어주고
        if(state.status==false){
          console.log('false to true');
          return {status:true};
        }
        //열린 이슈는 닫아준다.
        else {
          console.log('true to false');
          return {status:false};
        }
    default:
       return state;
  }  
}

const IssueDetailPage = () => {
  const { id } = useParams();

  //사실 param에 따라서.. 값이 달라지긴 하는데 여기를.. 초기에 다 넣어줘야 하지 않을까 싶다.
  const [issueInfo, dispatch] = useReducer(reducer, {status:true});

  //TODO: id로 api 호출 후 적절한 렌더링

  return (<>
    <div>Issue detail Page</div>
    <IssueContext.Provider value={{issueInfo, dispatch}}>
      <IssueTitle />
      <IssueStatusChangeButton />
    </IssueContext.Provider>
  </>);
};

export default IssueDetailPage;
