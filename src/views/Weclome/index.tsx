import { defineComponent } from 'vue';

interface AboutProps {}
const Login = defineComponent({
    setup(props: AboutProps) {
        return () => (
            <div style={{textAlign:"center"}}>
               welcome!
            </div>
            
        )
    }
})

export default Login;