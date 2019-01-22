export interface Subject {
    registerObserver(o: Observer):void;
    removeObserver(o: Observer): void;
    notifyObservers():void;
}

export interface Observer {
    update(temperature: number): void;
}
