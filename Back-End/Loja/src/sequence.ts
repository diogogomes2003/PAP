import {MiddlewareSequence} from '@loopback/rest';

//const SequenceActions = RestBindings.SequenceActions;

export class MySequence extends MiddlewareSequence {

}

// export class MySequence implements SequenceHandler {
//   constructor(
//     @inject(SequenceActions.FIND_ROUTE) protected findRoute: FindRoute,
//     @inject(SequenceActions.PARSE_PARAMS) protected parseParams: ParseParams,
//     @inject(SequenceActions.INVOKE_METHOD) protected invoke: InvokeMethod,
//     @inject(SequenceActions.SEND) public send: Send,
//     @inject(SequenceActions.REJECT) public reject: Reject,
//     @inject(AuthenticationBindings.AUTH_ACTION) protected authenticateRequest: AuthenticateFn,
//   ) { }

//   async handle(context: RequestContext) : Promise<void> {
//     try {

//       const {request, response} = context;
//       const route = this.findRoute(request);
//       await this.authenticateRequest(request);
//       const params = await this.parseParams(request, route);
//       const result = await this.invoke(route, params);
//       this.send(response, result);

//     } catch (error) {
//       if (
//         error.code === AUTHENTICATION_STRATEGY_NOT_FOUND ||
//         error.code === USER_PROFILE_NOT_FOUND
//       ) {
//         Object.assign(error, {statusCode: 401 /* Não autorizado*/})
//       }
//       this.reject(context, error);
//     }
//   }
// }
