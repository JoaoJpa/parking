export class StorageUser {
    private userId: string;
    private userName: string;

    get _userId(){
        return this.userId;
    }

    get _userName(){
        return this.userName;
    }

    constructor(userId: string, userName: string) {
        this.userId = userId;
        this.userName = userName;
    }
}
