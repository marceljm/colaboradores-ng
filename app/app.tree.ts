import {Component, OnInit} from '@angular/core';
import {TreeService} from './tree/treeService';
import {TreeNode} from 'primeng/primeng';

@Component({
    templateUrl: 'app/app.tree.html',
    selector: 'tree-app'
})
export class AppTree implements OnInit {
    private errorMessage: string;

    tree: TreeNode[];

    selectedFile: TreeNode;

    msgs: any;

    constructor(
        private treeService: TreeService) {
    }

    ngOnInit() {
        this.getTree();
    }

    getTree() {
        this.treeService.getTree().subscribe(
            tree => this.tree = tree,
            error => this.errorMessage = <any>error
        );
    }

    nodeSelect(event) {
        console.log(event.node.label);
        this.matricula = this.selectedFile.data;
        this.display = true;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Node Selected', detail: event.node.label });
    }

    display: boolean = false;
    matricula: string;
    showEntreGrupoDialog() {
        this.display = true;
    }
}