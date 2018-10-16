import * as express from 'express';
import { AllocationController} from '../controllers/allocation';

export class RoutesAllocation{
    private allocationController: AllocationController;
    
    constructor(app:express.Application){
        this.allocationController = new AllocationController();
        this.routes(app);
    }
    private routes(app):void{

        app.route('/allocations/status')
            
            .get(this.allocationController.getStatus)

        app.route('/allocations')
            
            .get(this.allocationController.getAllocationAll)

            .post(this.allocationController.addNewAllocation);

        app.route('/allocations/:allocationId')
        
            .get(this.allocationController.getAllocationId)

            .delete(this.allocationController.deleteAllocation)

            .put(this.allocationController.updateAllocation);

        app.route('/allocations/devolution/:key')
            
            .post(this.allocationController.devolutionKey);
    }
}