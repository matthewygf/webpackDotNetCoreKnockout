import * as ko from "knockout"
import ViewModel = require("./models/viewModel");
import TestViewModel = ViewModel.TestViewModel;

export class Main {
    constructor() {
        console.log("hello world");
        const vm = new TestViewModel();
        ko.applyBindings(vm);
    }
}