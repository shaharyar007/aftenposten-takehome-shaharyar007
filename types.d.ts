export interface ITeaser {
    type: 'teaser';
    id: string;
    src: string;
    target: ITarget;
    kicker?: IKicker;
    title: ITitle;
    standfirst?: IStandfirst;
    label: ILabel;
    image: IImage;
    imagePosition: string;
    timestamp: string;
    changes: IChanges;
    characteristics: ICharacteristics;
    clientProperties: IClientProperties;
    customProperties: ICustomProperties;
    story: IStory;
    access: IAccess;
    authors: IAuthor[];
}

interface ITarget {
    type: string;
    uri: string;
    expandedUri: string;
}

interface IKicker {
    value: string;
}

interface ITitle {
    value: string;
}

interface IStandfirst {
    value: string;
}

interface ILabel {
    value: string;
}

export interface ISectionLabel {
    access: IAccess;
    changes: IChanges;
    label: ILabel;
    customProperties: ICustomProperties;
}

export interface IImage {
    type: string;
    imageAsset: IImageAsset;
    largeImage?: boolean;
}

interface IImageAsset {
    id: string;
    cropFormat: string;
    size: {
        height: number;
        width: number;
    };
    hotspot: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    urls: IImageUrl[];
}

interface IImageUrl {
    height: number;
    width: number;
    url: string;
}

interface IChanges {
    created: string;
    updated: string;
    firstPublished: string;
    published: string;
}

interface ICharacteristics {
    lifetime: number;
    hotness: number;
}

interface IClientProperties {
    language: string;
}

interface ICustomProperties {
    darkSkin: boolean;
    liveBlog: boolean;
    breaking: boolean;
    feature: boolean;
    commentsEnabled: boolean;
    frontPageCardSize: string;
    presentationType?: string;
}
interface IStory {
    id: string;
    title: string;
    description: string;
    updated: string;
    slug: string;
}

interface IAccess {
    restrictions: string[];
}

interface IAuthor {
  id: string;
  title: string;
  description: string;
  contacts: IContact[];
  image?: string;
  imageAsset?: IImageAsset;
  slug: string;
}

interface IContact {
  type: string;
  value: string;
}