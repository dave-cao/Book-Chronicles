export default class FullScreen extends Plugin {
    static get pluginName(): string;
    constructor(editor: any);
    styles: {};
    init(): void;
    _restoreStyle(writer: any, name: any, value: any, element: any): void;
    _restoreStyles(writer: any, element: any): void;
}
import Plugin from "@ckeditor/ckeditor5-core/src/plugin";
