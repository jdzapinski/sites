export declare class Picture {
    element: HTMLElement;
    poster: string;
    large: string;
    type: "background" | "picture";
    width: number;
    height: number;
    nozoom: boolean;
    bg: string;
    alt: string;
    aspectRatio: number;
    sources: Array<any>;
    active: boolean;
    figure: HTMLElement;
    zoom: any;
    palette: any;
    componentWillLoad(): void;
    componentDidLoad(): void;
    mountZoom(): void;
    handlePosterChange(): void;
    handleActive(): void;
    medium(): Promise<any>;
    in(): Promise<void>;
    getPictureColor(): void;
    setBG(): void;
    prepareSources(): void;
    setBackgroundImage(): void;
    updateAspectRatio(): void;
    renderPicture(): any[];
    render(): any;
}
