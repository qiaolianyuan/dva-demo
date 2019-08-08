
import { connect } from 'dva';
import UserTable from '../components/user/user';

const UserPage=()=>{

    return (
      <div>
        <h1>UserPage</h1>
        <UserTable />
      </div>
            
    );
};

export default connect()(UserPage);