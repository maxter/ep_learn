export class AuthMock {

    constructor() {}

    private shouldAuth : boolean = true;

    public isAuthenticated(): boolean {
       return this.shouldAuth;
    }

    public logOff()
    {}

    public auth(user:String, password:String)
    {
        if(user==="user" && password==="12345")
          this.shouldAuth = true;
        else
          this.shouldAuth = false;

    }
}