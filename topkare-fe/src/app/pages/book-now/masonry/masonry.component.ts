import { Component } from '@angular/core';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrl: './masonry.component.css'
})
export class MasonryComponent {
  tiles = [
    {
        url: 'https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        cls: '',
        alt: 'Green leaf with an eye peeking through'
    },
    {
        url: 'https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
        cls: '',
        alt: 'Two women with striking eye make-up'
    },
    {
        url: 'https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
        cls: 'tall',
        alt: 'Woman with a glowing complexion'
    },
    {
        url: 'https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        cls: 'wide',
        alt: 'Skin care products on a table'
    },
    {
        url: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60',
        cls: '',
        alt: 'Neutral toned make-up palette'
    },
    {
        url: 'https://images.unsplash.com/photo-1588499756884-d72584d84df5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
        cls: 'tall',
        alt: 'Woman with dark hair in soft light'
    },
    {
        url: 'https://images.unsplash.com/photo-1588492885706-b8917f06df77?ixlib=rb-1.2.1&auto=format&fit=crop&w=1951&q=80',
        cls: 'big',
        alt: 'Close-up of make-up brushes and palette'
    },
    {
        url: 'https://images.unsplash.com/photo-1588247866001-68fa8c438dd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80',
        cls: '',
        alt: 'Natural beauty portrait'
    },
    {
        url: 'https://images.unsplash.com/photo-1588453862014-cd1a9ad06a12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
        cls: 'tall',
        alt: 'Woman applying skin care'
    },
    {
        url: 'https://images.unsplash.com/photo-1588414734732-660b07304ddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80',
        cls: '',
        alt: 'Colourful make-up flat lay'
    },
    {
        url: 'https://images.unsplash.com/photo-1588224575346-501f5880ef29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
        cls: '',
        alt: 'Woman with a soft pink lip'
    }
];
}
