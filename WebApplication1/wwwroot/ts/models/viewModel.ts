export class TestViewModel {
    heros: KnockoutObservable<string>;
    constructor() {
        this.heros = ko.observable("");
    }    

}