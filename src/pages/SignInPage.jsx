

export function SignInPage(){
    const navigate = useNavigate()
    
    function handleTest(e){
        e.preventDefault();
        navigate('/produto')
    }
    return(
    <>
    <strong onClick={handleTest}>SignIn Page</strong>    
    </>
    );
}