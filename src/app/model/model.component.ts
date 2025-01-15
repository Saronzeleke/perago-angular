import { Component, OnInit } from '@angular/core';
import { ModelService } from './model.service';
import { Model } from './model.model';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html',
  styleUrls: ['./models.component.css']
})
export class ModelsComponent implements OnInit {
  models: Model[] = [];

  constructor(private modelService: ModelService) {}

  ngOnInit(): void {
    this.loadModels();
  }

  loadModels() {
    this.modelService.getModels().subscribe(data => {
      this.models = data;
    });
  }

  deleteModel(id: number) {
    this.modelService.deleteModel(id).subscribe(() => {
      this.loadModels();
    });
  }
}
