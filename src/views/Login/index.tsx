import { defineComponent } from 'vue';
import { Button,Input } from 'ant-design-vue';
import "./index.css"
interface LoginProps {}
const Login = defineComponent({
    setup(props: LoginProps) {
        return () => (
            <div class="loginDiv">
                <h1>登录</h1>
                <div><label>用户名</label><Input></Input></div>
                <div><label>密码</label><Input type="password"></Input></div>
                <Button onClick={(e:MouseEvent)=>{
                    console.log(e);
                }}>登录</Button>
            </div>
            
        )
    }
})

export default Login;