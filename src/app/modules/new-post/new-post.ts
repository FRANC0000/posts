import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-new-post',
  imports: [],
  templateUrl: './new-post.html',
  styleUrl: './new-post.css',
})
export class NewPost {

  @Output() onClose = new EventEmitter<void>();

  cancelar() {
    console.log('Cancelar');
    this.onClose.emit();
  }

  publicar() {
    console.log('Publicando...');
    this.onClose.emit();
  }
}
