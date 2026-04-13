
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model UserRole
 * 
 */
export type UserRole = $Result.DefaultSelection<Prisma.$UserRolePayload>
/**
 * Model Subject
 * 
 */
export type Subject = $Result.DefaultSelection<Prisma.$SubjectPayload>
/**
 * Model Class
 * 
 */
export type Class = $Result.DefaultSelection<Prisma.$ClassPayload>
/**
 * Model TeacherAssign
 * 
 */
export type TeacherAssign = $Result.DefaultSelection<Prisma.$TeacherAssignPayload>
/**
 * Model Enrollment
 * 
 */
export type Enrollment = $Result.DefaultSelection<Prisma.$EnrollmentPayload>
/**
 * Model Material
 * 
 */
export type Material = $Result.DefaultSelection<Prisma.$MaterialPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Announcement
 * 
 */
export type Announcement = $Result.DefaultSelection<Prisma.$AnnouncementPayload>
/**
 * Model Submission
 * 
 */
export type Submission = $Result.DefaultSelection<Prisma.$SubmissionPayload>
/**
 * Model PerangkatPembelajaran
 * 
 */
export type PerangkatPembelajaran = $Result.DefaultSelection<Prisma.$PerangkatPembelajaranPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs>;

  /**
   * `prisma.userRole`: Exposes CRUD operations for the **UserRole** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserRoles
    * const userRoles = await prisma.userRole.findMany()
    * ```
    */
  get userRole(): Prisma.UserRoleDelegate<ExtArgs>;

  /**
   * `prisma.subject`: Exposes CRUD operations for the **Subject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Subjects
    * const subjects = await prisma.subject.findMany()
    * ```
    */
  get subject(): Prisma.SubjectDelegate<ExtArgs>;

  /**
   * `prisma.class`: Exposes CRUD operations for the **Class** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Classes
    * const classes = await prisma.class.findMany()
    * ```
    */
  get class(): Prisma.ClassDelegate<ExtArgs>;

  /**
   * `prisma.teacherAssign`: Exposes CRUD operations for the **TeacherAssign** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TeacherAssigns
    * const teacherAssigns = await prisma.teacherAssign.findMany()
    * ```
    */
  get teacherAssign(): Prisma.TeacherAssignDelegate<ExtArgs>;

  /**
   * `prisma.enrollment`: Exposes CRUD operations for the **Enrollment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Enrollments
    * const enrollments = await prisma.enrollment.findMany()
    * ```
    */
  get enrollment(): Prisma.EnrollmentDelegate<ExtArgs>;

  /**
   * `prisma.material`: Exposes CRUD operations for the **Material** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materials
    * const materials = await prisma.material.findMany()
    * ```
    */
  get material(): Prisma.MaterialDelegate<ExtArgs>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs>;

  /**
   * `prisma.announcement`: Exposes CRUD operations for the **Announcement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Announcements
    * const announcements = await prisma.announcement.findMany()
    * ```
    */
  get announcement(): Prisma.AnnouncementDelegate<ExtArgs>;

  /**
   * `prisma.submission`: Exposes CRUD operations for the **Submission** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Submissions
    * const submissions = await prisma.submission.findMany()
    * ```
    */
  get submission(): Prisma.SubmissionDelegate<ExtArgs>;

  /**
   * `prisma.perangkatPembelajaran`: Exposes CRUD operations for the **PerangkatPembelajaran** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PerangkatPembelajarans
    * const perangkatPembelajarans = await prisma.perangkatPembelajaran.findMany()
    * ```
    */
  get perangkatPembelajaran(): Prisma.PerangkatPembelajaranDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Role: 'Role',
    UserRole: 'UserRole',
    Subject: 'Subject',
    Class: 'Class',
    TeacherAssign: 'TeacherAssign',
    Enrollment: 'Enrollment',
    Material: 'Material',
    Assignment: 'Assignment',
    Announcement: 'Announcement',
    Submission: 'Submission',
    PerangkatPembelajaran: 'PerangkatPembelajaran'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "role" | "userRole" | "subject" | "class" | "teacherAssign" | "enrollment" | "material" | "assignment" | "announcement" | "submission" | "perangkatPembelajaran"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      UserRole: {
        payload: Prisma.$UserRolePayload<ExtArgs>
        fields: Prisma.UserRoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserRoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserRoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findFirst: {
            args: Prisma.UserRoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserRoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          findMany: {
            args: Prisma.UserRoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          create: {
            args: Prisma.UserRoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          createMany: {
            args: Prisma.UserRoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserRoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>[]
          }
          delete: {
            args: Prisma.UserRoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          update: {
            args: Prisma.UserRoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          deleteMany: {
            args: Prisma.UserRoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserRoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserRoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserRolePayload>
          }
          aggregate: {
            args: Prisma.UserRoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserRole>
          }
          groupBy: {
            args: Prisma.UserRoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserRoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserRoleCountArgs<ExtArgs>
            result: $Utils.Optional<UserRoleCountAggregateOutputType> | number
          }
        }
      }
      Subject: {
        payload: Prisma.$SubjectPayload<ExtArgs>
        fields: Prisma.SubjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findFirst: {
            args: Prisma.SubjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          findMany: {
            args: Prisma.SubjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          create: {
            args: Prisma.SubjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          createMany: {
            args: Prisma.SubjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>[]
          }
          delete: {
            args: Prisma.SubjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          update: {
            args: Prisma.SubjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          deleteMany: {
            args: Prisma.SubjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubjectPayload>
          }
          aggregate: {
            args: Prisma.SubjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubject>
          }
          groupBy: {
            args: Prisma.SubjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubjectCountArgs<ExtArgs>
            result: $Utils.Optional<SubjectCountAggregateOutputType> | number
          }
        }
      }
      Class: {
        payload: Prisma.$ClassPayload<ExtArgs>
        fields: Prisma.ClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findFirst: {
            args: Prisma.ClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          findMany: {
            args: Prisma.ClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          create: {
            args: Prisma.ClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          createMany: {
            args: Prisma.ClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>[]
          }
          delete: {
            args: Prisma.ClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          update: {
            args: Prisma.ClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          deleteMany: {
            args: Prisma.ClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClassPayload>
          }
          aggregate: {
            args: Prisma.ClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClass>
          }
          groupBy: {
            args: Prisma.ClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClassCountArgs<ExtArgs>
            result: $Utils.Optional<ClassCountAggregateOutputType> | number
          }
        }
      }
      TeacherAssign: {
        payload: Prisma.$TeacherAssignPayload<ExtArgs>
        fields: Prisma.TeacherAssignFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherAssignFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherAssignFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>
          }
          findFirst: {
            args: Prisma.TeacherAssignFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherAssignFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>
          }
          findMany: {
            args: Prisma.TeacherAssignFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>[]
          }
          create: {
            args: Prisma.TeacherAssignCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>
          }
          createMany: {
            args: Prisma.TeacherAssignCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherAssignCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>[]
          }
          delete: {
            args: Prisma.TeacherAssignDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>
          }
          update: {
            args: Prisma.TeacherAssignUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>
          }
          deleteMany: {
            args: Prisma.TeacherAssignDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherAssignUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherAssignUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherAssignPayload>
          }
          aggregate: {
            args: Prisma.TeacherAssignAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacherAssign>
          }
          groupBy: {
            args: Prisma.TeacherAssignGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherAssignGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherAssignCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherAssignCountAggregateOutputType> | number
          }
        }
      }
      Enrollment: {
        payload: Prisma.$EnrollmentPayload<ExtArgs>
        fields: Prisma.EnrollmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EnrollmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EnrollmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findFirst: {
            args: Prisma.EnrollmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EnrollmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          findMany: {
            args: Prisma.EnrollmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          create: {
            args: Prisma.EnrollmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          createMany: {
            args: Prisma.EnrollmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EnrollmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>[]
          }
          delete: {
            args: Prisma.EnrollmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          update: {
            args: Prisma.EnrollmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          deleteMany: {
            args: Prisma.EnrollmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EnrollmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EnrollmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EnrollmentPayload>
          }
          aggregate: {
            args: Prisma.EnrollmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEnrollment>
          }
          groupBy: {
            args: Prisma.EnrollmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EnrollmentCountArgs<ExtArgs>
            result: $Utils.Optional<EnrollmentCountAggregateOutputType> | number
          }
        }
      }
      Material: {
        payload: Prisma.$MaterialPayload<ExtArgs>
        fields: Prisma.MaterialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MaterialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MaterialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findFirst: {
            args: Prisma.MaterialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MaterialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          findMany: {
            args: Prisma.MaterialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          create: {
            args: Prisma.MaterialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          createMany: {
            args: Prisma.MaterialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MaterialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>[]
          }
          delete: {
            args: Prisma.MaterialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          update: {
            args: Prisma.MaterialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          deleteMany: {
            args: Prisma.MaterialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MaterialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MaterialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MaterialPayload>
          }
          aggregate: {
            args: Prisma.MaterialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMaterial>
          }
          groupBy: {
            args: Prisma.MaterialGroupByArgs<ExtArgs>
            result: $Utils.Optional<MaterialGroupByOutputType>[]
          }
          count: {
            args: Prisma.MaterialCountArgs<ExtArgs>
            result: $Utils.Optional<MaterialCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Announcement: {
        payload: Prisma.$AnnouncementPayload<ExtArgs>
        fields: Prisma.AnnouncementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AnnouncementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AnnouncementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findFirst: {
            args: Prisma.AnnouncementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AnnouncementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          findMany: {
            args: Prisma.AnnouncementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          create: {
            args: Prisma.AnnouncementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          createMany: {
            args: Prisma.AnnouncementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AnnouncementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>[]
          }
          delete: {
            args: Prisma.AnnouncementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          update: {
            args: Prisma.AnnouncementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          deleteMany: {
            args: Prisma.AnnouncementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AnnouncementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AnnouncementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AnnouncementPayload>
          }
          aggregate: {
            args: Prisma.AnnouncementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAnnouncement>
          }
          groupBy: {
            args: Prisma.AnnouncementGroupByArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementGroupByOutputType>[]
          }
          count: {
            args: Prisma.AnnouncementCountArgs<ExtArgs>
            result: $Utils.Optional<AnnouncementCountAggregateOutputType> | number
          }
        }
      }
      Submission: {
        payload: Prisma.$SubmissionPayload<ExtArgs>
        fields: Prisma.SubmissionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubmissionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubmissionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findFirst: {
            args: Prisma.SubmissionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubmissionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          findMany: {
            args: Prisma.SubmissionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          create: {
            args: Prisma.SubmissionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          createMany: {
            args: Prisma.SubmissionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubmissionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>[]
          }
          delete: {
            args: Prisma.SubmissionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          update: {
            args: Prisma.SubmissionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          deleteMany: {
            args: Prisma.SubmissionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubmissionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SubmissionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubmissionPayload>
          }
          aggregate: {
            args: Prisma.SubmissionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubmission>
          }
          groupBy: {
            args: Prisma.SubmissionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubmissionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubmissionCountArgs<ExtArgs>
            result: $Utils.Optional<SubmissionCountAggregateOutputType> | number
          }
        }
      }
      PerangkatPembelajaran: {
        payload: Prisma.$PerangkatPembelajaranPayload<ExtArgs>
        fields: Prisma.PerangkatPembelajaranFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PerangkatPembelajaranFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PerangkatPembelajaranFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>
          }
          findFirst: {
            args: Prisma.PerangkatPembelajaranFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PerangkatPembelajaranFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>
          }
          findMany: {
            args: Prisma.PerangkatPembelajaranFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>[]
          }
          create: {
            args: Prisma.PerangkatPembelajaranCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>
          }
          createMany: {
            args: Prisma.PerangkatPembelajaranCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PerangkatPembelajaranCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>[]
          }
          delete: {
            args: Prisma.PerangkatPembelajaranDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>
          }
          update: {
            args: Prisma.PerangkatPembelajaranUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>
          }
          deleteMany: {
            args: Prisma.PerangkatPembelajaranDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PerangkatPembelajaranUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PerangkatPembelajaranUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PerangkatPembelajaranPayload>
          }
          aggregate: {
            args: Prisma.PerangkatPembelajaranAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePerangkatPembelajaran>
          }
          groupBy: {
            args: Prisma.PerangkatPembelajaranGroupByArgs<ExtArgs>
            result: $Utils.Optional<PerangkatPembelajaranGroupByOutputType>[]
          }
          count: {
            args: Prisma.PerangkatPembelajaranCountArgs<ExtArgs>
            result: $Utils.Optional<PerangkatPembelajaranCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    roles: number
    teacherAssign: number
    materials: number
    assignments: number
    announcements: number
    enrollments: number
    perangkat_pembelajaran: number
    student_submissions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | UserCountOutputTypeCountRolesArgs
    teacherAssign?: boolean | UserCountOutputTypeCountTeacherAssignArgs
    materials?: boolean | UserCountOutputTypeCountMaterialsArgs
    assignments?: boolean | UserCountOutputTypeCountAssignmentsArgs
    announcements?: boolean | UserCountOutputTypeCountAnnouncementsArgs
    enrollments?: boolean | UserCountOutputTypeCountEnrollmentsArgs
    perangkat_pembelajaran?: boolean | UserCountOutputTypeCountPerangkat_pembelajaranArgs
    student_submissions?: boolean | UserCountOutputTypeCountStudent_submissionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTeacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAssignWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPerangkat_pembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerangkatPembelajaranWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountStudent_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
  }


  /**
   * Count Type SubjectCountOutputType
   */

  export type SubjectCountOutputType = {
    teacherAssign: number
    materials: number
    assignments: number
    perangkat_pembelajaran: number
  }

  export type SubjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherAssign?: boolean | SubjectCountOutputTypeCountTeacherAssignArgs
    materials?: boolean | SubjectCountOutputTypeCountMaterialsArgs
    assignments?: boolean | SubjectCountOutputTypeCountAssignmentsArgs
    perangkat_pembelajaran?: boolean | SubjectCountOutputTypeCountPerangkat_pembelajaranArgs
  }

  // Custom InputTypes
  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubjectCountOutputType
     */
    select?: SubjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountTeacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAssignWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * SubjectCountOutputType without action
   */
  export type SubjectCountOutputTypeCountPerangkat_pembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerangkatPembelajaranWhereInput
  }


  /**
   * Count Type ClassCountOutputType
   */

  export type ClassCountOutputType = {
    teacherAssign: number
    enrollments: number
    materials: number
    assignments: number
    announcements: number
    perangkat_pembelajaran: number
  }

  export type ClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherAssign?: boolean | ClassCountOutputTypeCountTeacherAssignArgs
    enrollments?: boolean | ClassCountOutputTypeCountEnrollmentsArgs
    materials?: boolean | ClassCountOutputTypeCountMaterialsArgs
    assignments?: boolean | ClassCountOutputTypeCountAssignmentsArgs
    announcements?: boolean | ClassCountOutputTypeCountAnnouncementsArgs
    perangkat_pembelajaran?: boolean | ClassCountOutputTypeCountPerangkat_pembelajaranArgs
  }

  // Custom InputTypes
  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClassCountOutputType
     */
    select?: ClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountTeacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAssignWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountEnrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountMaterialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountAnnouncementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
  }

  /**
   * ClassCountOutputType without action
   */
  export type ClassCountOutputTypeCountPerangkat_pembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerangkatPembelajaranWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    submissions: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    submissions?: boolean | AssignmentCountOutputTypeCountSubmissionsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSubmissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    full_name: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    full_name: string | null
    username: string | null
    email: string | null
    password_hash: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    full_name: number
    username: number
    email: number
    password_hash: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    full_name?: true
    username?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    full_name?: true
    username?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    full_name?: true
    username?: true
    email?: true
    password_hash?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    roles?: boolean | User$rolesArgs<ExtArgs>
    teacherAssign?: boolean | User$teacherAssignArgs<ExtArgs>
    materials?: boolean | User$materialsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    perangkat_pembelajaran?: boolean | User$perangkat_pembelajaranArgs<ExtArgs>
    student_submissions?: boolean | User$student_submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    full_name?: boolean
    username?: boolean
    email?: boolean
    password_hash?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    roles?: boolean | User$rolesArgs<ExtArgs>
    teacherAssign?: boolean | User$teacherAssignArgs<ExtArgs>
    materials?: boolean | User$materialsArgs<ExtArgs>
    assignments?: boolean | User$assignmentsArgs<ExtArgs>
    announcements?: boolean | User$announcementsArgs<ExtArgs>
    enrollments?: boolean | User$enrollmentsArgs<ExtArgs>
    perangkat_pembelajaran?: boolean | User$perangkat_pembelajaranArgs<ExtArgs>
    student_submissions?: boolean | User$student_submissionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      roles: Prisma.$UserRolePayload<ExtArgs>[]
      teacherAssign: Prisma.$TeacherAssignPayload<ExtArgs>[]
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      perangkat_pembelajaran: Prisma.$PerangkatPembelajaranPayload<ExtArgs>[]
      student_submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      full_name: string
      username: string
      email: string
      password_hash: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    roles<T extends User$rolesArgs<ExtArgs> = {}>(args?: Subset<T, User$rolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    teacherAssign<T extends User$teacherAssignArgs<ExtArgs> = {}>(args?: Subset<T, User$teacherAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findMany"> | Null>
    materials<T extends User$materialsArgs<ExtArgs> = {}>(args?: Subset<T, User$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany"> | Null>
    assignments<T extends User$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    announcements<T extends User$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, User$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
    enrollments<T extends User$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany"> | Null>
    perangkat_pembelajaran<T extends User$perangkat_pembelajaranArgs<ExtArgs> = {}>(args?: Subset<T, User$perangkat_pembelajaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    student_submissions<T extends User$student_submissionsArgs<ExtArgs> = {}>(args?: Subset<T, User$student_submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly full_name: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password_hash: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.roles
   */
  export type User$rolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * User.teacherAssign
   */
  export type User$teacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    where?: TeacherAssignWhereInput
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    cursor?: TeacherAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherAssignScalarFieldEnum | TeacherAssignScalarFieldEnum[]
  }

  /**
   * User.materials
   */
  export type User$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * User.assignments
   */
  export type User$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * User.announcements
   */
  export type User$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * User.enrollments
   */
  export type User$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * User.perangkat_pembelajaran
   */
  export type User$perangkat_pembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    where?: PerangkatPembelajaranWhereInput
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    cursor?: PerangkatPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerangkatPembelajaranScalarFieldEnum | PerangkatPembelajaranScalarFieldEnum[]
  }

  /**
   * User.student_submissions
   */
  export type User$student_submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleAvgAggregateOutputType = {
    id: number | null
  }

  export type RoleSumAggregateOutputType = {
    id: number | null
  }

  export type RoleMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type RoleAvgAggregateInputType = {
    id?: true
  }

  export type RoleSumAggregateInputType = {
    id?: true
  }

  export type RoleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _avg?: RoleAvgAggregateInputType
    _sum?: RoleSumAggregateInputType
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: number
    name: string
    description: string | null
    _count: RoleCountAggregateOutputType | null
    _avg: RoleAvgAggregateOutputType | null
    _sum: RoleSumAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserRolePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */ 
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'Int'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    cursor?: UserRoleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model UserRole
   */

  export type AggregateUserRole = {
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  export type UserRoleAvgAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UserRoleSumAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UserRoleMinAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UserRoleMaxAggregateOutputType = {
    user_id: number | null
    role_id: number | null
  }

  export type UserRoleCountAggregateOutputType = {
    user_id: number
    role_id: number
    _all: number
  }


  export type UserRoleAvgAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleSumAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleMinAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleMaxAggregateInputType = {
    user_id?: true
    role_id?: true
  }

  export type UserRoleCountAggregateInputType = {
    user_id?: true
    role_id?: true
    _all?: true
  }

  export type UserRoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRole to aggregate.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserRoles
    **/
    _count?: true | UserRoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserRoleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserRoleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserRoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserRoleMaxAggregateInputType
  }

  export type GetUserRoleAggregateType<T extends UserRoleAggregateArgs> = {
        [P in keyof T & keyof AggregateUserRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserRole[P]>
      : GetScalarType<T[P], AggregateUserRole[P]>
  }




  export type UserRoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserRoleWhereInput
    orderBy?: UserRoleOrderByWithAggregationInput | UserRoleOrderByWithAggregationInput[]
    by: UserRoleScalarFieldEnum[] | UserRoleScalarFieldEnum
    having?: UserRoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserRoleCountAggregateInputType | true
    _avg?: UserRoleAvgAggregateInputType
    _sum?: UserRoleSumAggregateInputType
    _min?: UserRoleMinAggregateInputType
    _max?: UserRoleMaxAggregateInputType
  }

  export type UserRoleGroupByOutputType = {
    user_id: number
    role_id: number
    _count: UserRoleCountAggregateOutputType | null
    _avg: UserRoleAvgAggregateOutputType | null
    _sum: UserRoleSumAggregateOutputType | null
    _min: UserRoleMinAggregateOutputType | null
    _max: UserRoleMaxAggregateOutputType | null
  }

  type GetUserRoleGroupByPayload<T extends UserRoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserRoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserRoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
            : GetScalarType<T[P], UserRoleGroupByOutputType[P]>
        }
      >
    >


  export type UserRoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    user_id?: boolean
    role_id?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userRole"]>

  export type UserRoleSelectScalar = {
    user_id?: boolean
    role_id?: boolean
  }

  export type UserRoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserRoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserRolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserRole"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      user_id: number
      role_id: number
    }, ExtArgs["result"]["userRole"]>
    composites: {}
  }

  type UserRoleGetPayload<S extends boolean | null | undefined | UserRoleDefaultArgs> = $Result.GetResult<Prisma.$UserRolePayload, S>

  type UserRoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserRoleFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserRoleCountAggregateInputType | true
    }

  export interface UserRoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserRole'], meta: { name: 'UserRole' } }
    /**
     * Find zero or one UserRole that matches the filter.
     * @param {UserRoleFindUniqueArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserRoleFindUniqueArgs>(args: SelectSubset<T, UserRoleFindUniqueArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserRole that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserRoleFindUniqueOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserRoleFindUniqueOrThrowArgs>(args: SelectSubset<T, UserRoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserRole that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserRoleFindFirstArgs>(args?: SelectSubset<T, UserRoleFindFirstArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserRole that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindFirstOrThrowArgs} args - Arguments to find a UserRole
     * @example
     * // Get one UserRole
     * const userRole = await prisma.userRole.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserRoleFindFirstOrThrowArgs>(args?: SelectSubset<T, UserRoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserRoles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserRoles
     * const userRoles = await prisma.userRole.findMany()
     * 
     * // Get first 10 UserRoles
     * const userRoles = await prisma.userRole.findMany({ take: 10 })
     * 
     * // Only select the `user_id`
     * const userRoleWithUser_idOnly = await prisma.userRole.findMany({ select: { user_id: true } })
     * 
     */
    findMany<T extends UserRoleFindManyArgs>(args?: SelectSubset<T, UserRoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserRole.
     * @param {UserRoleCreateArgs} args - Arguments to create a UserRole.
     * @example
     * // Create one UserRole
     * const UserRole = await prisma.userRole.create({
     *   data: {
     *     // ... data to create a UserRole
     *   }
     * })
     * 
     */
    create<T extends UserRoleCreateArgs>(args: SelectSubset<T, UserRoleCreateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserRoles.
     * @param {UserRoleCreateManyArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserRoleCreateManyArgs>(args?: SelectSubset<T, UserRoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserRoles and returns the data saved in the database.
     * @param {UserRoleCreateManyAndReturnArgs} args - Arguments to create many UserRoles.
     * @example
     * // Create many UserRoles
     * const userRole = await prisma.userRole.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserRoles and only return the `user_id`
     * const userRoleWithUser_idOnly = await prisma.userRole.createManyAndReturn({ 
     *   select: { user_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserRoleCreateManyAndReturnArgs>(args?: SelectSubset<T, UserRoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserRole.
     * @param {UserRoleDeleteArgs} args - Arguments to delete one UserRole.
     * @example
     * // Delete one UserRole
     * const UserRole = await prisma.userRole.delete({
     *   where: {
     *     // ... filter to delete one UserRole
     *   }
     * })
     * 
     */
    delete<T extends UserRoleDeleteArgs>(args: SelectSubset<T, UserRoleDeleteArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserRole.
     * @param {UserRoleUpdateArgs} args - Arguments to update one UserRole.
     * @example
     * // Update one UserRole
     * const userRole = await prisma.userRole.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserRoleUpdateArgs>(args: SelectSubset<T, UserRoleUpdateArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserRoles.
     * @param {UserRoleDeleteManyArgs} args - Arguments to filter UserRoles to delete.
     * @example
     * // Delete a few UserRoles
     * const { count } = await prisma.userRole.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserRoleDeleteManyArgs>(args?: SelectSubset<T, UserRoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserRoles
     * const userRole = await prisma.userRole.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserRoleUpdateManyArgs>(args: SelectSubset<T, UserRoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserRole.
     * @param {UserRoleUpsertArgs} args - Arguments to update or create a UserRole.
     * @example
     * // Update or create a UserRole
     * const userRole = await prisma.userRole.upsert({
     *   create: {
     *     // ... data to create a UserRole
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserRole we want to update
     *   }
     * })
     */
    upsert<T extends UserRoleUpsertArgs>(args: SelectSubset<T, UserRoleUpsertArgs<ExtArgs>>): Prisma__UserRoleClient<$Result.GetResult<Prisma.$UserRolePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserRoles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleCountArgs} args - Arguments to filter UserRoles to count.
     * @example
     * // Count the number of UserRoles
     * const count = await prisma.userRole.count({
     *   where: {
     *     // ... the filter for the UserRoles we want to count
     *   }
     * })
    **/
    count<T extends UserRoleCountArgs>(
      args?: Subset<T, UserRoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserRoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserRoleAggregateArgs>(args: Subset<T, UserRoleAggregateArgs>): Prisma.PrismaPromise<GetUserRoleAggregateType<T>>

    /**
     * Group by UserRole.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserRoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserRoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserRoleGroupByArgs['orderBy'] }
        : { orderBy?: UserRoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserRoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserRole model
   */
  readonly fields: UserRoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserRole.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserRoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserRole model
   */ 
  interface UserRoleFieldRefs {
    readonly user_id: FieldRef<"UserRole", 'Int'>
    readonly role_id: FieldRef<"UserRole", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserRole findUnique
   */
  export type UserRoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findUniqueOrThrow
   */
  export type UserRoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole findFirst
   */
  export type UserRoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findFirstOrThrow
   */
  export type UserRoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRole to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserRoles.
     */
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole findMany
   */
  export type UserRoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter, which UserRoles to fetch.
     */
    where?: UserRoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserRoles to fetch.
     */
    orderBy?: UserRoleOrderByWithRelationInput | UserRoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserRoles.
     */
    cursor?: UserRoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserRoles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserRoles.
     */
    skip?: number
    distinct?: UserRoleScalarFieldEnum | UserRoleScalarFieldEnum[]
  }

  /**
   * UserRole create
   */
  export type UserRoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to create a UserRole.
     */
    data: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
  }

  /**
   * UserRole createMany
   */
  export type UserRoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserRole createManyAndReturn
   */
  export type UserRoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserRoles.
     */
    data: UserRoleCreateManyInput | UserRoleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserRole update
   */
  export type UserRoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The data needed to update a UserRole.
     */
    data: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
    /**
     * Choose, which UserRole to update.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole updateMany
   */
  export type UserRoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserRoles.
     */
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyInput>
    /**
     * Filter which UserRoles to update
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole upsert
   */
  export type UserRoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * The filter to search for the UserRole to update in case it exists.
     */
    where: UserRoleWhereUniqueInput
    /**
     * In case the UserRole found by the `where` argument doesn't exist, create a new UserRole with this data.
     */
    create: XOR<UserRoleCreateInput, UserRoleUncheckedCreateInput>
    /**
     * In case the UserRole was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserRoleUpdateInput, UserRoleUncheckedUpdateInput>
  }

  /**
   * UserRole delete
   */
  export type UserRoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
    /**
     * Filter which UserRole to delete.
     */
    where: UserRoleWhereUniqueInput
  }

  /**
   * UserRole deleteMany
   */
  export type UserRoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserRoles to delete
     */
    where?: UserRoleWhereInput
  }

  /**
   * UserRole without action
   */
  export type UserRoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserRole
     */
    select?: UserRoleSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserRoleInclude<ExtArgs> | null
  }


  /**
   * Model Subject
   */

  export type AggregateSubject = {
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  export type SubjectAvgAggregateOutputType = {
    id: number | null
  }

  export type SubjectSumAggregateOutputType = {
    id: number | null
  }

  export type SubjectMinAggregateOutputType = {
    id: number | null
    subject_name: string | null
    code: string | null
  }

  export type SubjectMaxAggregateOutputType = {
    id: number | null
    subject_name: string | null
    code: string | null
  }

  export type SubjectCountAggregateOutputType = {
    id: number
    subject_name: number
    code: number
    _all: number
  }


  export type SubjectAvgAggregateInputType = {
    id?: true
  }

  export type SubjectSumAggregateInputType = {
    id?: true
  }

  export type SubjectMinAggregateInputType = {
    id?: true
    subject_name?: true
    code?: true
  }

  export type SubjectMaxAggregateInputType = {
    id?: true
    subject_name?: true
    code?: true
  }

  export type SubjectCountAggregateInputType = {
    id?: true
    subject_name?: true
    code?: true
    _all?: true
  }

  export type SubjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subject to aggregate.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Subjects
    **/
    _count?: true | SubjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubjectMaxAggregateInputType
  }

  export type GetSubjectAggregateType<T extends SubjectAggregateArgs> = {
        [P in keyof T & keyof AggregateSubject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubject[P]>
      : GetScalarType<T[P], AggregateSubject[P]>
  }




  export type SubjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubjectWhereInput
    orderBy?: SubjectOrderByWithAggregationInput | SubjectOrderByWithAggregationInput[]
    by: SubjectScalarFieldEnum[] | SubjectScalarFieldEnum
    having?: SubjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubjectCountAggregateInputType | true
    _avg?: SubjectAvgAggregateInputType
    _sum?: SubjectSumAggregateInputType
    _min?: SubjectMinAggregateInputType
    _max?: SubjectMaxAggregateInputType
  }

  export type SubjectGroupByOutputType = {
    id: number
    subject_name: string
    code: string | null
    _count: SubjectCountAggregateOutputType | null
    _avg: SubjectAvgAggregateOutputType | null
    _sum: SubjectSumAggregateOutputType | null
    _min: SubjectMinAggregateOutputType | null
    _max: SubjectMaxAggregateOutputType | null
  }

  type GetSubjectGroupByPayload<T extends SubjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubjectGroupByOutputType[P]>
            : GetScalarType<T[P], SubjectGroupByOutputType[P]>
        }
      >
    >


  export type SubjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_name?: boolean
    code?: boolean
    teacherAssign?: boolean | Subject$teacherAssignArgs<ExtArgs>
    materials?: boolean | Subject$materialsArgs<ExtArgs>
    assignments?: boolean | Subject$assignmentsArgs<ExtArgs>
    perangkat_pembelajaran?: boolean | Subject$perangkat_pembelajaranArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    subject_name?: boolean
    code?: boolean
  }, ExtArgs["result"]["subject"]>

  export type SubjectSelectScalar = {
    id?: boolean
    subject_name?: boolean
    code?: boolean
  }

  export type SubjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherAssign?: boolean | Subject$teacherAssignArgs<ExtArgs>
    materials?: boolean | Subject$materialsArgs<ExtArgs>
    assignments?: boolean | Subject$assignmentsArgs<ExtArgs>
    perangkat_pembelajaran?: boolean | Subject$perangkat_pembelajaranArgs<ExtArgs>
    _count?: boolean | SubjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SubjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Subject"
    objects: {
      teacherAssign: Prisma.$TeacherAssignPayload<ExtArgs>[]
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      perangkat_pembelajaran: Prisma.$PerangkatPembelajaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      subject_name: string
      code: string | null
    }, ExtArgs["result"]["subject"]>
    composites: {}
  }

  type SubjectGetPayload<S extends boolean | null | undefined | SubjectDefaultArgs> = $Result.GetResult<Prisma.$SubjectPayload, S>

  type SubjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubjectFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubjectCountAggregateInputType | true
    }

  export interface SubjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Subject'], meta: { name: 'Subject' } }
    /**
     * Find zero or one Subject that matches the filter.
     * @param {SubjectFindUniqueArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubjectFindUniqueArgs>(args: SelectSubset<T, SubjectFindUniqueArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Subject that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubjectFindUniqueOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubjectFindUniqueOrThrowArgs>(args: SelectSubset<T, SubjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Subject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubjectFindFirstArgs>(args?: SelectSubset<T, SubjectFindFirstArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Subject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindFirstOrThrowArgs} args - Arguments to find a Subject
     * @example
     * // Get one Subject
     * const subject = await prisma.subject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubjectFindFirstOrThrowArgs>(args?: SelectSubset<T, SubjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Subjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Subjects
     * const subjects = await prisma.subject.findMany()
     * 
     * // Get first 10 Subjects
     * const subjects = await prisma.subject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subjectWithIdOnly = await prisma.subject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubjectFindManyArgs>(args?: SelectSubset<T, SubjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Subject.
     * @param {SubjectCreateArgs} args - Arguments to create a Subject.
     * @example
     * // Create one Subject
     * const Subject = await prisma.subject.create({
     *   data: {
     *     // ... data to create a Subject
     *   }
     * })
     * 
     */
    create<T extends SubjectCreateArgs>(args: SelectSubset<T, SubjectCreateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Subjects.
     * @param {SubjectCreateManyArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubjectCreateManyArgs>(args?: SelectSubset<T, SubjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Subjects and returns the data saved in the database.
     * @param {SubjectCreateManyAndReturnArgs} args - Arguments to create many Subjects.
     * @example
     * // Create many Subjects
     * const subject = await prisma.subject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Subjects and only return the `id`
     * const subjectWithIdOnly = await prisma.subject.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubjectCreateManyAndReturnArgs>(args?: SelectSubset<T, SubjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Subject.
     * @param {SubjectDeleteArgs} args - Arguments to delete one Subject.
     * @example
     * // Delete one Subject
     * const Subject = await prisma.subject.delete({
     *   where: {
     *     // ... filter to delete one Subject
     *   }
     * })
     * 
     */
    delete<T extends SubjectDeleteArgs>(args: SelectSubset<T, SubjectDeleteArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Subject.
     * @param {SubjectUpdateArgs} args - Arguments to update one Subject.
     * @example
     * // Update one Subject
     * const subject = await prisma.subject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubjectUpdateArgs>(args: SelectSubset<T, SubjectUpdateArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Subjects.
     * @param {SubjectDeleteManyArgs} args - Arguments to filter Subjects to delete.
     * @example
     * // Delete a few Subjects
     * const { count } = await prisma.subject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubjectDeleteManyArgs>(args?: SelectSubset<T, SubjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Subjects
     * const subject = await prisma.subject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubjectUpdateManyArgs>(args: SelectSubset<T, SubjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Subject.
     * @param {SubjectUpsertArgs} args - Arguments to update or create a Subject.
     * @example
     * // Update or create a Subject
     * const subject = await prisma.subject.upsert({
     *   create: {
     *     // ... data to create a Subject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Subject we want to update
     *   }
     * })
     */
    upsert<T extends SubjectUpsertArgs>(args: SelectSubset<T, SubjectUpsertArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Subjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectCountArgs} args - Arguments to filter Subjects to count.
     * @example
     * // Count the number of Subjects
     * const count = await prisma.subject.count({
     *   where: {
     *     // ... the filter for the Subjects we want to count
     *   }
     * })
    **/
    count<T extends SubjectCountArgs>(
      args?: Subset<T, SubjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubjectAggregateArgs>(args: Subset<T, SubjectAggregateArgs>): Prisma.PrismaPromise<GetSubjectAggregateType<T>>

    /**
     * Group by Subject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubjectGroupByArgs['orderBy'] }
        : { orderBy?: SubjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Subject model
   */
  readonly fields: SubjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Subject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherAssign<T extends Subject$teacherAssignArgs<ExtArgs> = {}>(args?: Subset<T, Subject$teacherAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findMany"> | Null>
    materials<T extends Subject$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany"> | Null>
    assignments<T extends Subject$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Subject$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    perangkat_pembelajaran<T extends Subject$perangkat_pembelajaranArgs<ExtArgs> = {}>(args?: Subset<T, Subject$perangkat_pembelajaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Subject model
   */ 
  interface SubjectFieldRefs {
    readonly id: FieldRef<"Subject", 'Int'>
    readonly subject_name: FieldRef<"Subject", 'String'>
    readonly code: FieldRef<"Subject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Subject findUnique
   */
  export type SubjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findUniqueOrThrow
   */
  export type SubjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject findFirst
   */
  export type SubjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findFirstOrThrow
   */
  export type SubjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subject to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Subjects.
     */
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject findMany
   */
  export type SubjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter, which Subjects to fetch.
     */
    where?: SubjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Subjects to fetch.
     */
    orderBy?: SubjectOrderByWithRelationInput | SubjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Subjects.
     */
    cursor?: SubjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Subjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Subjects.
     */
    skip?: number
    distinct?: SubjectScalarFieldEnum | SubjectScalarFieldEnum[]
  }

  /**
   * Subject create
   */
  export type SubjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Subject.
     */
    data: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
  }

  /**
   * Subject createMany
   */
  export type SubjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject createManyAndReturn
   */
  export type SubjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Subjects.
     */
    data: SubjectCreateManyInput | SubjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Subject update
   */
  export type SubjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Subject.
     */
    data: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
    /**
     * Choose, which Subject to update.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject updateMany
   */
  export type SubjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Subjects.
     */
    data: XOR<SubjectUpdateManyMutationInput, SubjectUncheckedUpdateManyInput>
    /**
     * Filter which Subjects to update
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject upsert
   */
  export type SubjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Subject to update in case it exists.
     */
    where: SubjectWhereUniqueInput
    /**
     * In case the Subject found by the `where` argument doesn't exist, create a new Subject with this data.
     */
    create: XOR<SubjectCreateInput, SubjectUncheckedCreateInput>
    /**
     * In case the Subject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubjectUpdateInput, SubjectUncheckedUpdateInput>
  }

  /**
   * Subject delete
   */
  export type SubjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
    /**
     * Filter which Subject to delete.
     */
    where: SubjectWhereUniqueInput
  }

  /**
   * Subject deleteMany
   */
  export type SubjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Subjects to delete
     */
    where?: SubjectWhereInput
  }

  /**
   * Subject.teacherAssign
   */
  export type Subject$teacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    where?: TeacherAssignWhereInput
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    cursor?: TeacherAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherAssignScalarFieldEnum | TeacherAssignScalarFieldEnum[]
  }

  /**
   * Subject.materials
   */
  export type Subject$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Subject.assignments
   */
  export type Subject$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Subject.perangkat_pembelajaran
   */
  export type Subject$perangkat_pembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    where?: PerangkatPembelajaranWhereInput
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    cursor?: PerangkatPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerangkatPembelajaranScalarFieldEnum | PerangkatPembelajaranScalarFieldEnum[]
  }

  /**
   * Subject without action
   */
  export type SubjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Subject
     */
    select?: SubjectSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubjectInclude<ExtArgs> | null
  }


  /**
   * Model Class
   */

  export type AggregateClass = {
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  export type ClassAvgAggregateOutputType = {
    id: number | null
  }

  export type ClassSumAggregateOutputType = {
    id: number | null
  }

  export type ClassMinAggregateOutputType = {
    id: number | null
    class_name: string | null
    grade_level: string | null
  }

  export type ClassMaxAggregateOutputType = {
    id: number | null
    class_name: string | null
    grade_level: string | null
  }

  export type ClassCountAggregateOutputType = {
    id: number
    class_name: number
    grade_level: number
    _all: number
  }


  export type ClassAvgAggregateInputType = {
    id?: true
  }

  export type ClassSumAggregateInputType = {
    id?: true
  }

  export type ClassMinAggregateInputType = {
    id?: true
    class_name?: true
    grade_level?: true
  }

  export type ClassMaxAggregateInputType = {
    id?: true
    class_name?: true
    grade_level?: true
  }

  export type ClassCountAggregateInputType = {
    id?: true
    class_name?: true
    grade_level?: true
    _all?: true
  }

  export type ClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Class to aggregate.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Classes
    **/
    _count?: true | ClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClassAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClassSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClassMaxAggregateInputType
  }

  export type GetClassAggregateType<T extends ClassAggregateArgs> = {
        [P in keyof T & keyof AggregateClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClass[P]>
      : GetScalarType<T[P], AggregateClass[P]>
  }




  export type ClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClassWhereInput
    orderBy?: ClassOrderByWithAggregationInput | ClassOrderByWithAggregationInput[]
    by: ClassScalarFieldEnum[] | ClassScalarFieldEnum
    having?: ClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClassCountAggregateInputType | true
    _avg?: ClassAvgAggregateInputType
    _sum?: ClassSumAggregateInputType
    _min?: ClassMinAggregateInputType
    _max?: ClassMaxAggregateInputType
  }

  export type ClassGroupByOutputType = {
    id: number
    class_name: string
    grade_level: string | null
    _count: ClassCountAggregateOutputType | null
    _avg: ClassAvgAggregateOutputType | null
    _sum: ClassSumAggregateOutputType | null
    _min: ClassMinAggregateOutputType | null
    _max: ClassMaxAggregateOutputType | null
  }

  type GetClassGroupByPayload<T extends ClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClassGroupByOutputType[P]>
            : GetScalarType<T[P], ClassGroupByOutputType[P]>
        }
      >
    >


  export type ClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_name?: boolean
    grade_level?: boolean
    teacherAssign?: boolean | Class$teacherAssignArgs<ExtArgs>
    enrollments?: boolean | Class$enrollmentsArgs<ExtArgs>
    materials?: boolean | Class$materialsArgs<ExtArgs>
    assignments?: boolean | Class$assignmentsArgs<ExtArgs>
    announcements?: boolean | Class$announcementsArgs<ExtArgs>
    perangkat_pembelajaran?: boolean | Class$perangkat_pembelajaranArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["class"]>

  export type ClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_name?: boolean
    grade_level?: boolean
  }, ExtArgs["result"]["class"]>

  export type ClassSelectScalar = {
    id?: boolean
    class_name?: boolean
    grade_level?: boolean
  }

  export type ClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacherAssign?: boolean | Class$teacherAssignArgs<ExtArgs>
    enrollments?: boolean | Class$enrollmentsArgs<ExtArgs>
    materials?: boolean | Class$materialsArgs<ExtArgs>
    assignments?: boolean | Class$assignmentsArgs<ExtArgs>
    announcements?: boolean | Class$announcementsArgs<ExtArgs>
    perangkat_pembelajaran?: boolean | Class$perangkat_pembelajaranArgs<ExtArgs>
    _count?: boolean | ClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Class"
    objects: {
      teacherAssign: Prisma.$TeacherAssignPayload<ExtArgs>[]
      enrollments: Prisma.$EnrollmentPayload<ExtArgs>[]
      materials: Prisma.$MaterialPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      announcements: Prisma.$AnnouncementPayload<ExtArgs>[]
      perangkat_pembelajaran: Prisma.$PerangkatPembelajaranPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class_name: string
      grade_level: string | null
    }, ExtArgs["result"]["class"]>
    composites: {}
  }

  type ClassGetPayload<S extends boolean | null | undefined | ClassDefaultArgs> = $Result.GetResult<Prisma.$ClassPayload, S>

  type ClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClassFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClassCountAggregateInputType | true
    }

  export interface ClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Class'], meta: { name: 'Class' } }
    /**
     * Find zero or one Class that matches the filter.
     * @param {ClassFindUniqueArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClassFindUniqueArgs>(args: SelectSubset<T, ClassFindUniqueArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Class that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClassFindUniqueOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClassFindUniqueOrThrowArgs>(args: SelectSubset<T, ClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Class that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClassFindFirstArgs>(args?: SelectSubset<T, ClassFindFirstArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Class that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindFirstOrThrowArgs} args - Arguments to find a Class
     * @example
     * // Get one Class
     * const class = await prisma.class.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClassFindFirstOrThrowArgs>(args?: SelectSubset<T, ClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Classes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Classes
     * const classes = await prisma.class.findMany()
     * 
     * // Get first 10 Classes
     * const classes = await prisma.class.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const classWithIdOnly = await prisma.class.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClassFindManyArgs>(args?: SelectSubset<T, ClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Class.
     * @param {ClassCreateArgs} args - Arguments to create a Class.
     * @example
     * // Create one Class
     * const Class = await prisma.class.create({
     *   data: {
     *     // ... data to create a Class
     *   }
     * })
     * 
     */
    create<T extends ClassCreateArgs>(args: SelectSubset<T, ClassCreateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Classes.
     * @param {ClassCreateManyArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClassCreateManyArgs>(args?: SelectSubset<T, ClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Classes and returns the data saved in the database.
     * @param {ClassCreateManyAndReturnArgs} args - Arguments to create many Classes.
     * @example
     * // Create many Classes
     * const class = await prisma.class.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Classes and only return the `id`
     * const classWithIdOnly = await prisma.class.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClassCreateManyAndReturnArgs>(args?: SelectSubset<T, ClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Class.
     * @param {ClassDeleteArgs} args - Arguments to delete one Class.
     * @example
     * // Delete one Class
     * const Class = await prisma.class.delete({
     *   where: {
     *     // ... filter to delete one Class
     *   }
     * })
     * 
     */
    delete<T extends ClassDeleteArgs>(args: SelectSubset<T, ClassDeleteArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Class.
     * @param {ClassUpdateArgs} args - Arguments to update one Class.
     * @example
     * // Update one Class
     * const class = await prisma.class.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClassUpdateArgs>(args: SelectSubset<T, ClassUpdateArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Classes.
     * @param {ClassDeleteManyArgs} args - Arguments to filter Classes to delete.
     * @example
     * // Delete a few Classes
     * const { count } = await prisma.class.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClassDeleteManyArgs>(args?: SelectSubset<T, ClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Classes
     * const class = await prisma.class.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClassUpdateManyArgs>(args: SelectSubset<T, ClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Class.
     * @param {ClassUpsertArgs} args - Arguments to update or create a Class.
     * @example
     * // Update or create a Class
     * const class = await prisma.class.upsert({
     *   create: {
     *     // ... data to create a Class
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Class we want to update
     *   }
     * })
     */
    upsert<T extends ClassUpsertArgs>(args: SelectSubset<T, ClassUpsertArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Classes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassCountArgs} args - Arguments to filter Classes to count.
     * @example
     * // Count the number of Classes
     * const count = await prisma.class.count({
     *   where: {
     *     // ... the filter for the Classes we want to count
     *   }
     * })
    **/
    count<T extends ClassCountArgs>(
      args?: Subset<T, ClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClassAggregateArgs>(args: Subset<T, ClassAggregateArgs>): Prisma.PrismaPromise<GetClassAggregateType<T>>

    /**
     * Group by Class.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClassGroupByArgs['orderBy'] }
        : { orderBy?: ClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Class model
   */
  readonly fields: ClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Class.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacherAssign<T extends Class$teacherAssignArgs<ExtArgs> = {}>(args?: Subset<T, Class$teacherAssignArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findMany"> | Null>
    enrollments<T extends Class$enrollmentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$enrollmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany"> | Null>
    materials<T extends Class$materialsArgs<ExtArgs> = {}>(args?: Subset<T, Class$materialsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany"> | Null>
    assignments<T extends Class$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Class$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany"> | Null>
    announcements<T extends Class$announcementsArgs<ExtArgs> = {}>(args?: Subset<T, Class$announcementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany"> | Null>
    perangkat_pembelajaran<T extends Class$perangkat_pembelajaranArgs<ExtArgs> = {}>(args?: Subset<T, Class$perangkat_pembelajaranArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Class model
   */ 
  interface ClassFieldRefs {
    readonly id: FieldRef<"Class", 'Int'>
    readonly class_name: FieldRef<"Class", 'String'>
    readonly grade_level: FieldRef<"Class", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Class findUnique
   */
  export type ClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findUniqueOrThrow
   */
  export type ClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class findFirst
   */
  export type ClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findFirstOrThrow
   */
  export type ClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Class to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Classes.
     */
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class findMany
   */
  export type ClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter, which Classes to fetch.
     */
    where?: ClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Classes to fetch.
     */
    orderBy?: ClassOrderByWithRelationInput | ClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Classes.
     */
    cursor?: ClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Classes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Classes.
     */
    skip?: number
    distinct?: ClassScalarFieldEnum | ClassScalarFieldEnum[]
  }

  /**
   * Class create
   */
  export type ClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to create a Class.
     */
    data: XOR<ClassCreateInput, ClassUncheckedCreateInput>
  }

  /**
   * Class createMany
   */
  export type ClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class createManyAndReturn
   */
  export type ClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Classes.
     */
    data: ClassCreateManyInput | ClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Class update
   */
  export type ClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The data needed to update a Class.
     */
    data: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
    /**
     * Choose, which Class to update.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class updateMany
   */
  export type ClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Classes.
     */
    data: XOR<ClassUpdateManyMutationInput, ClassUncheckedUpdateManyInput>
    /**
     * Filter which Classes to update
     */
    where?: ClassWhereInput
  }

  /**
   * Class upsert
   */
  export type ClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * The filter to search for the Class to update in case it exists.
     */
    where: ClassWhereUniqueInput
    /**
     * In case the Class found by the `where` argument doesn't exist, create a new Class with this data.
     */
    create: XOR<ClassCreateInput, ClassUncheckedCreateInput>
    /**
     * In case the Class was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClassUpdateInput, ClassUncheckedUpdateInput>
  }

  /**
   * Class delete
   */
  export type ClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    /**
     * Filter which Class to delete.
     */
    where: ClassWhereUniqueInput
  }

  /**
   * Class deleteMany
   */
  export type ClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Classes to delete
     */
    where?: ClassWhereInput
  }

  /**
   * Class.teacherAssign
   */
  export type Class$teacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    where?: TeacherAssignWhereInput
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    cursor?: TeacherAssignWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TeacherAssignScalarFieldEnum | TeacherAssignScalarFieldEnum[]
  }

  /**
   * Class.enrollments
   */
  export type Class$enrollmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    cursor?: EnrollmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Class.materials
   */
  export type Class$materialsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    cursor?: MaterialWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Class.assignments
   */
  export type Class$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Class.announcements
   */
  export type Class$announcementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    cursor?: AnnouncementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Class.perangkat_pembelajaran
   */
  export type Class$perangkat_pembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    where?: PerangkatPembelajaranWhereInput
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    cursor?: PerangkatPembelajaranWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PerangkatPembelajaranScalarFieldEnum | PerangkatPembelajaranScalarFieldEnum[]
  }

  /**
   * Class without action
   */
  export type ClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
  }


  /**
   * Model TeacherAssign
   */

  export type AggregateTeacherAssign = {
    _count: TeacherAssignCountAggregateOutputType | null
    _avg: TeacherAssignAvgAggregateOutputType | null
    _sum: TeacherAssignSumAggregateOutputType | null
    _min: TeacherAssignMinAggregateOutputType | null
    _max: TeacherAssignMaxAggregateOutputType | null
  }

  export type TeacherAssignAvgAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    class_id: number | null
    subject_id: number | null
  }

  export type TeacherAssignSumAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    class_id: number | null
    subject_id: number | null
  }

  export type TeacherAssignMinAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    class_id: number | null
    subject_id: number | null
  }

  export type TeacherAssignMaxAggregateOutputType = {
    id: number | null
    teacher_id: number | null
    class_id: number | null
    subject_id: number | null
  }

  export type TeacherAssignCountAggregateOutputType = {
    id: number
    teacher_id: number
    class_id: number
    subject_id: number
    _all: number
  }


  export type TeacherAssignAvgAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    subject_id?: true
  }

  export type TeacherAssignSumAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    subject_id?: true
  }

  export type TeacherAssignMinAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    subject_id?: true
  }

  export type TeacherAssignMaxAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    subject_id?: true
  }

  export type TeacherAssignCountAggregateInputType = {
    id?: true
    teacher_id?: true
    class_id?: true
    subject_id?: true
    _all?: true
  }

  export type TeacherAssignAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherAssign to aggregate.
     */
    where?: TeacherAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAssigns to fetch.
     */
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TeacherAssigns
    **/
    _count?: true | TeacherAssignCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAssignAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherAssignSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherAssignMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherAssignMaxAggregateInputType
  }

  export type GetTeacherAssignAggregateType<T extends TeacherAssignAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacherAssign]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacherAssign[P]>
      : GetScalarType<T[P], AggregateTeacherAssign[P]>
  }




  export type TeacherAssignGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherAssignWhereInput
    orderBy?: TeacherAssignOrderByWithAggregationInput | TeacherAssignOrderByWithAggregationInput[]
    by: TeacherAssignScalarFieldEnum[] | TeacherAssignScalarFieldEnum
    having?: TeacherAssignScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherAssignCountAggregateInputType | true
    _avg?: TeacherAssignAvgAggregateInputType
    _sum?: TeacherAssignSumAggregateInputType
    _min?: TeacherAssignMinAggregateInputType
    _max?: TeacherAssignMaxAggregateInputType
  }

  export type TeacherAssignGroupByOutputType = {
    id: number
    teacher_id: number
    class_id: number
    subject_id: number
    _count: TeacherAssignCountAggregateOutputType | null
    _avg: TeacherAssignAvgAggregateOutputType | null
    _sum: TeacherAssignSumAggregateOutputType | null
    _min: TeacherAssignMinAggregateOutputType | null
    _max: TeacherAssignMaxAggregateOutputType | null
  }

  type GetTeacherAssignGroupByPayload<T extends TeacherAssignGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherAssignGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherAssignGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherAssignGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherAssignGroupByOutputType[P]>
        }
      >
    >


  export type TeacherAssignSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAssign"]>

  export type TeacherAssignSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacherAssign"]>

  export type TeacherAssignSelectScalar = {
    id?: boolean
    teacher_id?: boolean
    class_id?: boolean
    subject_id?: boolean
  }

  export type TeacherAssignInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }
  export type TeacherAssignIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
  }

  export type $TeacherAssignPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TeacherAssign"
    objects: {
      teacher: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      teacher_id: number
      class_id: number
      subject_id: number
    }, ExtArgs["result"]["teacherAssign"]>
    composites: {}
  }

  type TeacherAssignGetPayload<S extends boolean | null | undefined | TeacherAssignDefaultArgs> = $Result.GetResult<Prisma.$TeacherAssignPayload, S>

  type TeacherAssignCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeacherAssignFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeacherAssignCountAggregateInputType | true
    }

  export interface TeacherAssignDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TeacherAssign'], meta: { name: 'TeacherAssign' } }
    /**
     * Find zero or one TeacherAssign that matches the filter.
     * @param {TeacherAssignFindUniqueArgs} args - Arguments to find a TeacherAssign
     * @example
     * // Get one TeacherAssign
     * const teacherAssign = await prisma.teacherAssign.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherAssignFindUniqueArgs>(args: SelectSubset<T, TeacherAssignFindUniqueArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one TeacherAssign that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeacherAssignFindUniqueOrThrowArgs} args - Arguments to find a TeacherAssign
     * @example
     * // Get one TeacherAssign
     * const teacherAssign = await prisma.teacherAssign.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherAssignFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherAssignFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first TeacherAssign that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignFindFirstArgs} args - Arguments to find a TeacherAssign
     * @example
     * // Get one TeacherAssign
     * const teacherAssign = await prisma.teacherAssign.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherAssignFindFirstArgs>(args?: SelectSubset<T, TeacherAssignFindFirstArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first TeacherAssign that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignFindFirstOrThrowArgs} args - Arguments to find a TeacherAssign
     * @example
     * // Get one TeacherAssign
     * const teacherAssign = await prisma.teacherAssign.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherAssignFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherAssignFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more TeacherAssigns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TeacherAssigns
     * const teacherAssigns = await prisma.teacherAssign.findMany()
     * 
     * // Get first 10 TeacherAssigns
     * const teacherAssigns = await prisma.teacherAssign.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherAssignWithIdOnly = await prisma.teacherAssign.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherAssignFindManyArgs>(args?: SelectSubset<T, TeacherAssignFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a TeacherAssign.
     * @param {TeacherAssignCreateArgs} args - Arguments to create a TeacherAssign.
     * @example
     * // Create one TeacherAssign
     * const TeacherAssign = await prisma.teacherAssign.create({
     *   data: {
     *     // ... data to create a TeacherAssign
     *   }
     * })
     * 
     */
    create<T extends TeacherAssignCreateArgs>(args: SelectSubset<T, TeacherAssignCreateArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many TeacherAssigns.
     * @param {TeacherAssignCreateManyArgs} args - Arguments to create many TeacherAssigns.
     * @example
     * // Create many TeacherAssigns
     * const teacherAssign = await prisma.teacherAssign.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherAssignCreateManyArgs>(args?: SelectSubset<T, TeacherAssignCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TeacherAssigns and returns the data saved in the database.
     * @param {TeacherAssignCreateManyAndReturnArgs} args - Arguments to create many TeacherAssigns.
     * @example
     * // Create many TeacherAssigns
     * const teacherAssign = await prisma.teacherAssign.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TeacherAssigns and only return the `id`
     * const teacherAssignWithIdOnly = await prisma.teacherAssign.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherAssignCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherAssignCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a TeacherAssign.
     * @param {TeacherAssignDeleteArgs} args - Arguments to delete one TeacherAssign.
     * @example
     * // Delete one TeacherAssign
     * const TeacherAssign = await prisma.teacherAssign.delete({
     *   where: {
     *     // ... filter to delete one TeacherAssign
     *   }
     * })
     * 
     */
    delete<T extends TeacherAssignDeleteArgs>(args: SelectSubset<T, TeacherAssignDeleteArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one TeacherAssign.
     * @param {TeacherAssignUpdateArgs} args - Arguments to update one TeacherAssign.
     * @example
     * // Update one TeacherAssign
     * const teacherAssign = await prisma.teacherAssign.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherAssignUpdateArgs>(args: SelectSubset<T, TeacherAssignUpdateArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more TeacherAssigns.
     * @param {TeacherAssignDeleteManyArgs} args - Arguments to filter TeacherAssigns to delete.
     * @example
     * // Delete a few TeacherAssigns
     * const { count } = await prisma.teacherAssign.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherAssignDeleteManyArgs>(args?: SelectSubset<T, TeacherAssignDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TeacherAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TeacherAssigns
     * const teacherAssign = await prisma.teacherAssign.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherAssignUpdateManyArgs>(args: SelectSubset<T, TeacherAssignUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TeacherAssign.
     * @param {TeacherAssignUpsertArgs} args - Arguments to update or create a TeacherAssign.
     * @example
     * // Update or create a TeacherAssign
     * const teacherAssign = await prisma.teacherAssign.upsert({
     *   create: {
     *     // ... data to create a TeacherAssign
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TeacherAssign we want to update
     *   }
     * })
     */
    upsert<T extends TeacherAssignUpsertArgs>(args: SelectSubset<T, TeacherAssignUpsertArgs<ExtArgs>>): Prisma__TeacherAssignClient<$Result.GetResult<Prisma.$TeacherAssignPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of TeacherAssigns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignCountArgs} args - Arguments to filter TeacherAssigns to count.
     * @example
     * // Count the number of TeacherAssigns
     * const count = await prisma.teacherAssign.count({
     *   where: {
     *     // ... the filter for the TeacherAssigns we want to count
     *   }
     * })
    **/
    count<T extends TeacherAssignCountArgs>(
      args?: Subset<T, TeacherAssignCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherAssignCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TeacherAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAssignAggregateArgs>(args: Subset<T, TeacherAssignAggregateArgs>): Prisma.PrismaPromise<GetTeacherAssignAggregateType<T>>

    /**
     * Group by TeacherAssign.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAssignGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherAssignGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherAssignGroupByArgs['orderBy'] }
        : { orderBy?: TeacherAssignGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherAssignGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherAssignGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TeacherAssign model
   */
  readonly fields: TeacherAssignFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TeacherAssign.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherAssignClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TeacherAssign model
   */ 
  interface TeacherAssignFieldRefs {
    readonly id: FieldRef<"TeacherAssign", 'Int'>
    readonly teacher_id: FieldRef<"TeacherAssign", 'Int'>
    readonly class_id: FieldRef<"TeacherAssign", 'Int'>
    readonly subject_id: FieldRef<"TeacherAssign", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * TeacherAssign findUnique
   */
  export type TeacherAssignFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAssign to fetch.
     */
    where: TeacherAssignWhereUniqueInput
  }

  /**
   * TeacherAssign findUniqueOrThrow
   */
  export type TeacherAssignFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAssign to fetch.
     */
    where: TeacherAssignWhereUniqueInput
  }

  /**
   * TeacherAssign findFirst
   */
  export type TeacherAssignFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAssign to fetch.
     */
    where?: TeacherAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAssigns to fetch.
     */
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherAssigns.
     */
    cursor?: TeacherAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherAssigns.
     */
    distinct?: TeacherAssignScalarFieldEnum | TeacherAssignScalarFieldEnum[]
  }

  /**
   * TeacherAssign findFirstOrThrow
   */
  export type TeacherAssignFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAssign to fetch.
     */
    where?: TeacherAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAssigns to fetch.
     */
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TeacherAssigns.
     */
    cursor?: TeacherAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAssigns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TeacherAssigns.
     */
    distinct?: TeacherAssignScalarFieldEnum | TeacherAssignScalarFieldEnum[]
  }

  /**
   * TeacherAssign findMany
   */
  export type TeacherAssignFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * Filter, which TeacherAssigns to fetch.
     */
    where?: TeacherAssignWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TeacherAssigns to fetch.
     */
    orderBy?: TeacherAssignOrderByWithRelationInput | TeacherAssignOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TeacherAssigns.
     */
    cursor?: TeacherAssignWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TeacherAssigns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TeacherAssigns.
     */
    skip?: number
    distinct?: TeacherAssignScalarFieldEnum | TeacherAssignScalarFieldEnum[]
  }

  /**
   * TeacherAssign create
   */
  export type TeacherAssignCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * The data needed to create a TeacherAssign.
     */
    data: XOR<TeacherAssignCreateInput, TeacherAssignUncheckedCreateInput>
  }

  /**
   * TeacherAssign createMany
   */
  export type TeacherAssignCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TeacherAssigns.
     */
    data: TeacherAssignCreateManyInput | TeacherAssignCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TeacherAssign createManyAndReturn
   */
  export type TeacherAssignCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many TeacherAssigns.
     */
    data: TeacherAssignCreateManyInput | TeacherAssignCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TeacherAssign update
   */
  export type TeacherAssignUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * The data needed to update a TeacherAssign.
     */
    data: XOR<TeacherAssignUpdateInput, TeacherAssignUncheckedUpdateInput>
    /**
     * Choose, which TeacherAssign to update.
     */
    where: TeacherAssignWhereUniqueInput
  }

  /**
   * TeacherAssign updateMany
   */
  export type TeacherAssignUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TeacherAssigns.
     */
    data: XOR<TeacherAssignUpdateManyMutationInput, TeacherAssignUncheckedUpdateManyInput>
    /**
     * Filter which TeacherAssigns to update
     */
    where?: TeacherAssignWhereInput
  }

  /**
   * TeacherAssign upsert
   */
  export type TeacherAssignUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * The filter to search for the TeacherAssign to update in case it exists.
     */
    where: TeacherAssignWhereUniqueInput
    /**
     * In case the TeacherAssign found by the `where` argument doesn't exist, create a new TeacherAssign with this data.
     */
    create: XOR<TeacherAssignCreateInput, TeacherAssignUncheckedCreateInput>
    /**
     * In case the TeacherAssign was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherAssignUpdateInput, TeacherAssignUncheckedUpdateInput>
  }

  /**
   * TeacherAssign delete
   */
  export type TeacherAssignDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
    /**
     * Filter which TeacherAssign to delete.
     */
    where: TeacherAssignWhereUniqueInput
  }

  /**
   * TeacherAssign deleteMany
   */
  export type TeacherAssignDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TeacherAssigns to delete
     */
    where?: TeacherAssignWhereInput
  }

  /**
   * TeacherAssign without action
   */
  export type TeacherAssignDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherAssign
     */
    select?: TeacherAssignSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherAssignInclude<ExtArgs> | null
  }


  /**
   * Model Enrollment
   */

  export type AggregateEnrollment = {
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  export type EnrollmentAvgAggregateOutputType = {
    id: number | null
    student_id: number | null
    class_id: number | null
  }

  export type EnrollmentSumAggregateOutputType = {
    id: number | null
    student_id: number | null
    class_id: number | null
  }

  export type EnrollmentMinAggregateOutputType = {
    id: number | null
    student_id: number | null
    class_id: number | null
  }

  export type EnrollmentMaxAggregateOutputType = {
    id: number | null
    student_id: number | null
    class_id: number | null
  }

  export type EnrollmentCountAggregateOutputType = {
    id: number
    student_id: number
    class_id: number
    _all: number
  }


  export type EnrollmentAvgAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
  }

  export type EnrollmentSumAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
  }

  export type EnrollmentMinAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
  }

  export type EnrollmentMaxAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
  }

  export type EnrollmentCountAggregateInputType = {
    id?: true
    student_id?: true
    class_id?: true
    _all?: true
  }

  export type EnrollmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollment to aggregate.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Enrollments
    **/
    _count?: true | EnrollmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EnrollmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EnrollmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EnrollmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EnrollmentMaxAggregateInputType
  }

  export type GetEnrollmentAggregateType<T extends EnrollmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEnrollment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEnrollment[P]>
      : GetScalarType<T[P], AggregateEnrollment[P]>
  }




  export type EnrollmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EnrollmentWhereInput
    orderBy?: EnrollmentOrderByWithAggregationInput | EnrollmentOrderByWithAggregationInput[]
    by: EnrollmentScalarFieldEnum[] | EnrollmentScalarFieldEnum
    having?: EnrollmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EnrollmentCountAggregateInputType | true
    _avg?: EnrollmentAvgAggregateInputType
    _sum?: EnrollmentSumAggregateInputType
    _min?: EnrollmentMinAggregateInputType
    _max?: EnrollmentMaxAggregateInputType
  }

  export type EnrollmentGroupByOutputType = {
    id: number
    student_id: number
    class_id: number
    _count: EnrollmentCountAggregateOutputType | null
    _avg: EnrollmentAvgAggregateOutputType | null
    _sum: EnrollmentSumAggregateOutputType | null
    _min: EnrollmentMinAggregateOutputType | null
    _max: EnrollmentMaxAggregateOutputType | null
  }

  type GetEnrollmentGroupByPayload<T extends EnrollmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EnrollmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EnrollmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
            : GetScalarType<T[P], EnrollmentGroupByOutputType[P]>
        }
      >
    >


  export type EnrollmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    student_id?: boolean
    class_id?: boolean
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["enrollment"]>

  export type EnrollmentSelectScalar = {
    id?: boolean
    student_id?: boolean
    class_id?: boolean
  }

  export type EnrollmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }
  export type EnrollmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | UserDefaultArgs<ExtArgs>
    class?: boolean | ClassDefaultArgs<ExtArgs>
  }

  export type $EnrollmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Enrollment"
    objects: {
      student: Prisma.$UserPayload<ExtArgs>
      class: Prisma.$ClassPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      student_id: number
      class_id: number
    }, ExtArgs["result"]["enrollment"]>
    composites: {}
  }

  type EnrollmentGetPayload<S extends boolean | null | undefined | EnrollmentDefaultArgs> = $Result.GetResult<Prisma.$EnrollmentPayload, S>

  type EnrollmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EnrollmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EnrollmentCountAggregateInputType | true
    }

  export interface EnrollmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Enrollment'], meta: { name: 'Enrollment' } }
    /**
     * Find zero or one Enrollment that matches the filter.
     * @param {EnrollmentFindUniqueArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EnrollmentFindUniqueArgs>(args: SelectSubset<T, EnrollmentFindUniqueArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Enrollment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EnrollmentFindUniqueOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EnrollmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EnrollmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EnrollmentFindFirstArgs>(args?: SelectSubset<T, EnrollmentFindFirstArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Enrollment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindFirstOrThrowArgs} args - Arguments to find a Enrollment
     * @example
     * // Get one Enrollment
     * const enrollment = await prisma.enrollment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EnrollmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EnrollmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Enrollments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Enrollments
     * const enrollments = await prisma.enrollment.findMany()
     * 
     * // Get first 10 Enrollments
     * const enrollments = await prisma.enrollment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EnrollmentFindManyArgs>(args?: SelectSubset<T, EnrollmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Enrollment.
     * @param {EnrollmentCreateArgs} args - Arguments to create a Enrollment.
     * @example
     * // Create one Enrollment
     * const Enrollment = await prisma.enrollment.create({
     *   data: {
     *     // ... data to create a Enrollment
     *   }
     * })
     * 
     */
    create<T extends EnrollmentCreateArgs>(args: SelectSubset<T, EnrollmentCreateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Enrollments.
     * @param {EnrollmentCreateManyArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EnrollmentCreateManyArgs>(args?: SelectSubset<T, EnrollmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Enrollments and returns the data saved in the database.
     * @param {EnrollmentCreateManyAndReturnArgs} args - Arguments to create many Enrollments.
     * @example
     * // Create many Enrollments
     * const enrollment = await prisma.enrollment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Enrollments and only return the `id`
     * const enrollmentWithIdOnly = await prisma.enrollment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EnrollmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EnrollmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Enrollment.
     * @param {EnrollmentDeleteArgs} args - Arguments to delete one Enrollment.
     * @example
     * // Delete one Enrollment
     * const Enrollment = await prisma.enrollment.delete({
     *   where: {
     *     // ... filter to delete one Enrollment
     *   }
     * })
     * 
     */
    delete<T extends EnrollmentDeleteArgs>(args: SelectSubset<T, EnrollmentDeleteArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Enrollment.
     * @param {EnrollmentUpdateArgs} args - Arguments to update one Enrollment.
     * @example
     * // Update one Enrollment
     * const enrollment = await prisma.enrollment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EnrollmentUpdateArgs>(args: SelectSubset<T, EnrollmentUpdateArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Enrollments.
     * @param {EnrollmentDeleteManyArgs} args - Arguments to filter Enrollments to delete.
     * @example
     * // Delete a few Enrollments
     * const { count } = await prisma.enrollment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EnrollmentDeleteManyArgs>(args?: SelectSubset<T, EnrollmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Enrollments
     * const enrollment = await prisma.enrollment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EnrollmentUpdateManyArgs>(args: SelectSubset<T, EnrollmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Enrollment.
     * @param {EnrollmentUpsertArgs} args - Arguments to update or create a Enrollment.
     * @example
     * // Update or create a Enrollment
     * const enrollment = await prisma.enrollment.upsert({
     *   create: {
     *     // ... data to create a Enrollment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Enrollment we want to update
     *   }
     * })
     */
    upsert<T extends EnrollmentUpsertArgs>(args: SelectSubset<T, EnrollmentUpsertArgs<ExtArgs>>): Prisma__EnrollmentClient<$Result.GetResult<Prisma.$EnrollmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Enrollments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentCountArgs} args - Arguments to filter Enrollments to count.
     * @example
     * // Count the number of Enrollments
     * const count = await prisma.enrollment.count({
     *   where: {
     *     // ... the filter for the Enrollments we want to count
     *   }
     * })
    **/
    count<T extends EnrollmentCountArgs>(
      args?: Subset<T, EnrollmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EnrollmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EnrollmentAggregateArgs>(args: Subset<T, EnrollmentAggregateArgs>): Prisma.PrismaPromise<GetEnrollmentAggregateType<T>>

    /**
     * Group by Enrollment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EnrollmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EnrollmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EnrollmentGroupByArgs['orderBy'] }
        : { orderBy?: EnrollmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EnrollmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEnrollmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Enrollment model
   */
  readonly fields: EnrollmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Enrollment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EnrollmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Enrollment model
   */ 
  interface EnrollmentFieldRefs {
    readonly id: FieldRef<"Enrollment", 'Int'>
    readonly student_id: FieldRef<"Enrollment", 'Int'>
    readonly class_id: FieldRef<"Enrollment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Enrollment findUnique
   */
  export type EnrollmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findUniqueOrThrow
   */
  export type EnrollmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment findFirst
   */
  export type EnrollmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findFirstOrThrow
   */
  export type EnrollmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollment to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Enrollments.
     */
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment findMany
   */
  export type EnrollmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter, which Enrollments to fetch.
     */
    where?: EnrollmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Enrollments to fetch.
     */
    orderBy?: EnrollmentOrderByWithRelationInput | EnrollmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Enrollments.
     */
    cursor?: EnrollmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Enrollments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Enrollments.
     */
    skip?: number
    distinct?: EnrollmentScalarFieldEnum | EnrollmentScalarFieldEnum[]
  }

  /**
   * Enrollment create
   */
  export type EnrollmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Enrollment.
     */
    data: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
  }

  /**
   * Enrollment createMany
   */
  export type EnrollmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Enrollment createManyAndReturn
   */
  export type EnrollmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Enrollments.
     */
    data: EnrollmentCreateManyInput | EnrollmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Enrollment update
   */
  export type EnrollmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Enrollment.
     */
    data: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
    /**
     * Choose, which Enrollment to update.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment updateMany
   */
  export type EnrollmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Enrollments.
     */
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyInput>
    /**
     * Filter which Enrollments to update
     */
    where?: EnrollmentWhereInput
  }

  /**
   * Enrollment upsert
   */
  export type EnrollmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Enrollment to update in case it exists.
     */
    where: EnrollmentWhereUniqueInput
    /**
     * In case the Enrollment found by the `where` argument doesn't exist, create a new Enrollment with this data.
     */
    create: XOR<EnrollmentCreateInput, EnrollmentUncheckedCreateInput>
    /**
     * In case the Enrollment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EnrollmentUpdateInput, EnrollmentUncheckedUpdateInput>
  }

  /**
   * Enrollment delete
   */
  export type EnrollmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
    /**
     * Filter which Enrollment to delete.
     */
    where: EnrollmentWhereUniqueInput
  }

  /**
   * Enrollment deleteMany
   */
  export type EnrollmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Enrollments to delete
     */
    where?: EnrollmentWhereInput
  }

  /**
   * Enrollment without action
   */
  export type EnrollmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Enrollment
     */
    select?: EnrollmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EnrollmentInclude<ExtArgs> | null
  }


  /**
   * Model Material
   */

  export type AggregateMaterial = {
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  export type MaterialAvgAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type MaterialSumAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type MaterialMinAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    file_url: string | null
    createdAt: Date | null
  }

  export type MaterialMaxAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    file_url: string | null
    createdAt: Date | null
  }

  export type MaterialCountAggregateOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: number
    description: number
    file_url: number
    createdAt: number
    _all: number
  }


  export type MaterialAvgAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type MaterialSumAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type MaterialMinAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    file_url?: true
    createdAt?: true
  }

  export type MaterialMaxAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    file_url?: true
    createdAt?: true
  }

  export type MaterialCountAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    file_url?: true
    createdAt?: true
    _all?: true
  }

  export type MaterialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Material to aggregate.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materials
    **/
    _count?: true | MaterialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MaterialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MaterialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MaterialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MaterialMaxAggregateInputType
  }

  export type GetMaterialAggregateType<T extends MaterialAggregateArgs> = {
        [P in keyof T & keyof AggregateMaterial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMaterial[P]>
      : GetScalarType<T[P], AggregateMaterial[P]>
  }




  export type MaterialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MaterialWhereInput
    orderBy?: MaterialOrderByWithAggregationInput | MaterialOrderByWithAggregationInput[]
    by: MaterialScalarFieldEnum[] | MaterialScalarFieldEnum
    having?: MaterialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MaterialCountAggregateInputType | true
    _avg?: MaterialAvgAggregateInputType
    _sum?: MaterialSumAggregateInputType
    _min?: MaterialMinAggregateInputType
    _max?: MaterialMaxAggregateInputType
  }

  export type MaterialGroupByOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description: string | null
    file_url: string | null
    createdAt: Date
    _count: MaterialCountAggregateOutputType | null
    _avg: MaterialAvgAggregateOutputType | null
    _sum: MaterialSumAggregateOutputType | null
    _min: MaterialMinAggregateOutputType | null
    _max: MaterialMaxAggregateOutputType | null
  }

  type GetMaterialGroupByPayload<T extends MaterialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MaterialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MaterialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MaterialGroupByOutputType[P]>
            : GetScalarType<T[P], MaterialGroupByOutputType[P]>
        }
      >
    >


  export type MaterialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    file_url?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    file_url?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["material"]>

  export type MaterialSelectScalar = {
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    file_url?: boolean
    createdAt?: boolean
  }

  export type MaterialInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type MaterialIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $MaterialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Material"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class_id: number
      subject_id: number
      teacher_id: number
      title: string
      description: string | null
      file_url: string | null
      createdAt: Date
    }, ExtArgs["result"]["material"]>
    composites: {}
  }

  type MaterialGetPayload<S extends boolean | null | undefined | MaterialDefaultArgs> = $Result.GetResult<Prisma.$MaterialPayload, S>

  type MaterialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MaterialFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MaterialCountAggregateInputType | true
    }

  export interface MaterialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Material'], meta: { name: 'Material' } }
    /**
     * Find zero or one Material that matches the filter.
     * @param {MaterialFindUniqueArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MaterialFindUniqueArgs>(args: SelectSubset<T, MaterialFindUniqueArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Material that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MaterialFindUniqueOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MaterialFindUniqueOrThrowArgs>(args: SelectSubset<T, MaterialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Material that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MaterialFindFirstArgs>(args?: SelectSubset<T, MaterialFindFirstArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Material that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindFirstOrThrowArgs} args - Arguments to find a Material
     * @example
     * // Get one Material
     * const material = await prisma.material.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MaterialFindFirstOrThrowArgs>(args?: SelectSubset<T, MaterialFindFirstOrThrowArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Materials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materials
     * const materials = await prisma.material.findMany()
     * 
     * // Get first 10 Materials
     * const materials = await prisma.material.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materialWithIdOnly = await prisma.material.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MaterialFindManyArgs>(args?: SelectSubset<T, MaterialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Material.
     * @param {MaterialCreateArgs} args - Arguments to create a Material.
     * @example
     * // Create one Material
     * const Material = await prisma.material.create({
     *   data: {
     *     // ... data to create a Material
     *   }
     * })
     * 
     */
    create<T extends MaterialCreateArgs>(args: SelectSubset<T, MaterialCreateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Materials.
     * @param {MaterialCreateManyArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MaterialCreateManyArgs>(args?: SelectSubset<T, MaterialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Materials and returns the data saved in the database.
     * @param {MaterialCreateManyAndReturnArgs} args - Arguments to create many Materials.
     * @example
     * // Create many Materials
     * const material = await prisma.material.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Materials and only return the `id`
     * const materialWithIdOnly = await prisma.material.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MaterialCreateManyAndReturnArgs>(args?: SelectSubset<T, MaterialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Material.
     * @param {MaterialDeleteArgs} args - Arguments to delete one Material.
     * @example
     * // Delete one Material
     * const Material = await prisma.material.delete({
     *   where: {
     *     // ... filter to delete one Material
     *   }
     * })
     * 
     */
    delete<T extends MaterialDeleteArgs>(args: SelectSubset<T, MaterialDeleteArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Material.
     * @param {MaterialUpdateArgs} args - Arguments to update one Material.
     * @example
     * // Update one Material
     * const material = await prisma.material.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MaterialUpdateArgs>(args: SelectSubset<T, MaterialUpdateArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Materials.
     * @param {MaterialDeleteManyArgs} args - Arguments to filter Materials to delete.
     * @example
     * // Delete a few Materials
     * const { count } = await prisma.material.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MaterialDeleteManyArgs>(args?: SelectSubset<T, MaterialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materials
     * const material = await prisma.material.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MaterialUpdateManyArgs>(args: SelectSubset<T, MaterialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Material.
     * @param {MaterialUpsertArgs} args - Arguments to update or create a Material.
     * @example
     * // Update or create a Material
     * const material = await prisma.material.upsert({
     *   create: {
     *     // ... data to create a Material
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Material we want to update
     *   }
     * })
     */
    upsert<T extends MaterialUpsertArgs>(args: SelectSubset<T, MaterialUpsertArgs<ExtArgs>>): Prisma__MaterialClient<$Result.GetResult<Prisma.$MaterialPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Materials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialCountArgs} args - Arguments to filter Materials to count.
     * @example
     * // Count the number of Materials
     * const count = await prisma.material.count({
     *   where: {
     *     // ... the filter for the Materials we want to count
     *   }
     * })
    **/
    count<T extends MaterialCountArgs>(
      args?: Subset<T, MaterialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MaterialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MaterialAggregateArgs>(args: Subset<T, MaterialAggregateArgs>): Prisma.PrismaPromise<GetMaterialAggregateType<T>>

    /**
     * Group by Material.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MaterialGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MaterialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MaterialGroupByArgs['orderBy'] }
        : { orderBy?: MaterialGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MaterialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMaterialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Material model
   */
  readonly fields: MaterialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Material.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MaterialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Material model
   */ 
  interface MaterialFieldRefs {
    readonly id: FieldRef<"Material", 'Int'>
    readonly class_id: FieldRef<"Material", 'Int'>
    readonly subject_id: FieldRef<"Material", 'Int'>
    readonly teacher_id: FieldRef<"Material", 'Int'>
    readonly title: FieldRef<"Material", 'String'>
    readonly description: FieldRef<"Material", 'String'>
    readonly file_url: FieldRef<"Material", 'String'>
    readonly createdAt: FieldRef<"Material", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Material findUnique
   */
  export type MaterialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findUniqueOrThrow
   */
  export type MaterialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material findFirst
   */
  export type MaterialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findFirstOrThrow
   */
  export type MaterialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Material to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materials.
     */
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material findMany
   */
  export type MaterialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter, which Materials to fetch.
     */
    where?: MaterialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materials to fetch.
     */
    orderBy?: MaterialOrderByWithRelationInput | MaterialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materials.
     */
    cursor?: MaterialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materials.
     */
    skip?: number
    distinct?: MaterialScalarFieldEnum | MaterialScalarFieldEnum[]
  }

  /**
   * Material create
   */
  export type MaterialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to create a Material.
     */
    data: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
  }

  /**
   * Material createMany
   */
  export type MaterialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Material createManyAndReturn
   */
  export type MaterialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Materials.
     */
    data: MaterialCreateManyInput | MaterialCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Material update
   */
  export type MaterialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The data needed to update a Material.
     */
    data: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
    /**
     * Choose, which Material to update.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material updateMany
   */
  export type MaterialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materials.
     */
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyInput>
    /**
     * Filter which Materials to update
     */
    where?: MaterialWhereInput
  }

  /**
   * Material upsert
   */
  export type MaterialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * The filter to search for the Material to update in case it exists.
     */
    where: MaterialWhereUniqueInput
    /**
     * In case the Material found by the `where` argument doesn't exist, create a new Material with this data.
     */
    create: XOR<MaterialCreateInput, MaterialUncheckedCreateInput>
    /**
     * In case the Material was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MaterialUpdateInput, MaterialUncheckedUpdateInput>
  }

  /**
   * Material delete
   */
  export type MaterialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
    /**
     * Filter which Material to delete.
     */
    where: MaterialWhereUniqueInput
  }

  /**
   * Material deleteMany
   */
  export type MaterialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materials to delete
     */
    where?: MaterialWhereInput
  }

  /**
   * Material without action
   */
  export type MaterialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Material
     */
    select?: MaterialSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MaterialInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    attachment_url: string | null
    due_at: Date | null
    createdAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    attachment_url: string | null
    due_at: Date | null
    createdAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: number
    description: number
    attachment_url: number
    due_at: number
    createdAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type AssignmentSumAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    attachment_url?: true
    due_at?: true
    createdAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    attachment_url?: true
    due_at?: true
    createdAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    attachment_url?: true
    due_at?: true
    createdAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description: string | null
    attachment_url: string | null
    due_at: Date | null
    createdAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    attachment_url?: boolean
    due_at?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    attachment_url?: boolean
    due_at?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    attachment_url?: boolean
    due_at?: boolean
    createdAt?: boolean
  }

  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
    submissions?: boolean | Assignment$submissionsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
      submissions: Prisma.$SubmissionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class_id: number
      subject_id: number
      teacher_id: number
      title: string
      description: string | null
      attachment_url: string | null
      due_at: Date | null
      createdAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    submissions<T extends Assignment$submissionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$submissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */ 
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'Int'>
    readonly class_id: FieldRef<"Assignment", 'Int'>
    readonly subject_id: FieldRef<"Assignment", 'Int'>
    readonly teacher_id: FieldRef<"Assignment", 'Int'>
    readonly title: FieldRef<"Assignment", 'String'>
    readonly description: FieldRef<"Assignment", 'String'>
    readonly attachment_url: FieldRef<"Assignment", 'String'>
    readonly due_at: FieldRef<"Assignment", 'DateTime'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
  }

  /**
   * Assignment.submissions
   */
  export type Assignment$submissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    cursor?: SubmissionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Announcement
   */

  export type AggregateAnnouncement = {
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  export type AnnouncementAvgAggregateOutputType = {
    id: number | null
    class_id: number | null
    created_by: number | null
  }

  export type AnnouncementSumAggregateOutputType = {
    id: number | null
    class_id: number | null
    created_by: number | null
  }

  export type AnnouncementMinAggregateOutputType = {
    id: number | null
    scope: string | null
    class_id: number | null
    created_by: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type AnnouncementMaxAggregateOutputType = {
    id: number | null
    scope: string | null
    class_id: number | null
    created_by: number | null
    title: string | null
    content: string | null
    createdAt: Date | null
  }

  export type AnnouncementCountAggregateOutputType = {
    id: number
    scope: number
    class_id: number
    created_by: number
    title: number
    content: number
    createdAt: number
    _all: number
  }


  export type AnnouncementAvgAggregateInputType = {
    id?: true
    class_id?: true
    created_by?: true
  }

  export type AnnouncementSumAggregateInputType = {
    id?: true
    class_id?: true
    created_by?: true
  }

  export type AnnouncementMinAggregateInputType = {
    id?: true
    scope?: true
    class_id?: true
    created_by?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type AnnouncementMaxAggregateInputType = {
    id?: true
    scope?: true
    class_id?: true
    created_by?: true
    title?: true
    content?: true
    createdAt?: true
  }

  export type AnnouncementCountAggregateInputType = {
    id?: true
    scope?: true
    class_id?: true
    created_by?: true
    title?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type AnnouncementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcement to aggregate.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Announcements
    **/
    _count?: true | AnnouncementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AnnouncementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AnnouncementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AnnouncementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AnnouncementMaxAggregateInputType
  }

  export type GetAnnouncementAggregateType<T extends AnnouncementAggregateArgs> = {
        [P in keyof T & keyof AggregateAnnouncement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAnnouncement[P]>
      : GetScalarType<T[P], AggregateAnnouncement[P]>
  }




  export type AnnouncementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AnnouncementWhereInput
    orderBy?: AnnouncementOrderByWithAggregationInput | AnnouncementOrderByWithAggregationInput[]
    by: AnnouncementScalarFieldEnum[] | AnnouncementScalarFieldEnum
    having?: AnnouncementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AnnouncementCountAggregateInputType | true
    _avg?: AnnouncementAvgAggregateInputType
    _sum?: AnnouncementSumAggregateInputType
    _min?: AnnouncementMinAggregateInputType
    _max?: AnnouncementMaxAggregateInputType
  }

  export type AnnouncementGroupByOutputType = {
    id: number
    scope: string
    class_id: number | null
    created_by: number
    title: string
    content: string
    createdAt: Date
    _count: AnnouncementCountAggregateOutputType | null
    _avg: AnnouncementAvgAggregateOutputType | null
    _sum: AnnouncementSumAggregateOutputType | null
    _min: AnnouncementMinAggregateOutputType | null
    _max: AnnouncementMaxAggregateOutputType | null
  }

  type GetAnnouncementGroupByPayload<T extends AnnouncementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AnnouncementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AnnouncementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
            : GetScalarType<T[P], AnnouncementGroupByOutputType[P]>
        }
      >
    >


  export type AnnouncementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    class_id?: boolean
    created_by?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    class?: boolean | Announcement$classArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    scope?: boolean
    class_id?: boolean
    created_by?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
    class?: boolean | Announcement$classArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["announcement"]>

  export type AnnouncementSelectScalar = {
    id?: boolean
    scope?: boolean
    class_id?: boolean
    created_by?: boolean
    title?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type AnnouncementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | Announcement$classArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AnnouncementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | Announcement$classArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AnnouncementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Announcement"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs> | null
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      scope: string
      class_id: number | null
      created_by: number
      title: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["announcement"]>
    composites: {}
  }

  type AnnouncementGetPayload<S extends boolean | null | undefined | AnnouncementDefaultArgs> = $Result.GetResult<Prisma.$AnnouncementPayload, S>

  type AnnouncementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AnnouncementFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AnnouncementCountAggregateInputType | true
    }

  export interface AnnouncementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Announcement'], meta: { name: 'Announcement' } }
    /**
     * Find zero or one Announcement that matches the filter.
     * @param {AnnouncementFindUniqueArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AnnouncementFindUniqueArgs>(args: SelectSubset<T, AnnouncementFindUniqueArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Announcement that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AnnouncementFindUniqueOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AnnouncementFindUniqueOrThrowArgs>(args: SelectSubset<T, AnnouncementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Announcement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AnnouncementFindFirstArgs>(args?: SelectSubset<T, AnnouncementFindFirstArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Announcement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindFirstOrThrowArgs} args - Arguments to find a Announcement
     * @example
     * // Get one Announcement
     * const announcement = await prisma.announcement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AnnouncementFindFirstOrThrowArgs>(args?: SelectSubset<T, AnnouncementFindFirstOrThrowArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Announcements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Announcements
     * const announcements = await prisma.announcement.findMany()
     * 
     * // Get first 10 Announcements
     * const announcements = await prisma.announcement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const announcementWithIdOnly = await prisma.announcement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AnnouncementFindManyArgs>(args?: SelectSubset<T, AnnouncementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Announcement.
     * @param {AnnouncementCreateArgs} args - Arguments to create a Announcement.
     * @example
     * // Create one Announcement
     * const Announcement = await prisma.announcement.create({
     *   data: {
     *     // ... data to create a Announcement
     *   }
     * })
     * 
     */
    create<T extends AnnouncementCreateArgs>(args: SelectSubset<T, AnnouncementCreateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Announcements.
     * @param {AnnouncementCreateManyArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AnnouncementCreateManyArgs>(args?: SelectSubset<T, AnnouncementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Announcements and returns the data saved in the database.
     * @param {AnnouncementCreateManyAndReturnArgs} args - Arguments to create many Announcements.
     * @example
     * // Create many Announcements
     * const announcement = await prisma.announcement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Announcements and only return the `id`
     * const announcementWithIdOnly = await prisma.announcement.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AnnouncementCreateManyAndReturnArgs>(args?: SelectSubset<T, AnnouncementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Announcement.
     * @param {AnnouncementDeleteArgs} args - Arguments to delete one Announcement.
     * @example
     * // Delete one Announcement
     * const Announcement = await prisma.announcement.delete({
     *   where: {
     *     // ... filter to delete one Announcement
     *   }
     * })
     * 
     */
    delete<T extends AnnouncementDeleteArgs>(args: SelectSubset<T, AnnouncementDeleteArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Announcement.
     * @param {AnnouncementUpdateArgs} args - Arguments to update one Announcement.
     * @example
     * // Update one Announcement
     * const announcement = await prisma.announcement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AnnouncementUpdateArgs>(args: SelectSubset<T, AnnouncementUpdateArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Announcements.
     * @param {AnnouncementDeleteManyArgs} args - Arguments to filter Announcements to delete.
     * @example
     * // Delete a few Announcements
     * const { count } = await prisma.announcement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AnnouncementDeleteManyArgs>(args?: SelectSubset<T, AnnouncementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Announcements
     * const announcement = await prisma.announcement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AnnouncementUpdateManyArgs>(args: SelectSubset<T, AnnouncementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Announcement.
     * @param {AnnouncementUpsertArgs} args - Arguments to update or create a Announcement.
     * @example
     * // Update or create a Announcement
     * const announcement = await prisma.announcement.upsert({
     *   create: {
     *     // ... data to create a Announcement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Announcement we want to update
     *   }
     * })
     */
    upsert<T extends AnnouncementUpsertArgs>(args: SelectSubset<T, AnnouncementUpsertArgs<ExtArgs>>): Prisma__AnnouncementClient<$Result.GetResult<Prisma.$AnnouncementPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Announcements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementCountArgs} args - Arguments to filter Announcements to count.
     * @example
     * // Count the number of Announcements
     * const count = await prisma.announcement.count({
     *   where: {
     *     // ... the filter for the Announcements we want to count
     *   }
     * })
    **/
    count<T extends AnnouncementCountArgs>(
      args?: Subset<T, AnnouncementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AnnouncementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AnnouncementAggregateArgs>(args: Subset<T, AnnouncementAggregateArgs>): Prisma.PrismaPromise<GetAnnouncementAggregateType<T>>

    /**
     * Group by Announcement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AnnouncementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AnnouncementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AnnouncementGroupByArgs['orderBy'] }
        : { orderBy?: AnnouncementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AnnouncementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAnnouncementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Announcement model
   */
  readonly fields: AnnouncementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Announcement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AnnouncementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends Announcement$classArgs<ExtArgs> = {}>(args?: Subset<T, Announcement$classArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Announcement model
   */ 
  interface AnnouncementFieldRefs {
    readonly id: FieldRef<"Announcement", 'Int'>
    readonly scope: FieldRef<"Announcement", 'String'>
    readonly class_id: FieldRef<"Announcement", 'Int'>
    readonly created_by: FieldRef<"Announcement", 'Int'>
    readonly title: FieldRef<"Announcement", 'String'>
    readonly content: FieldRef<"Announcement", 'String'>
    readonly createdAt: FieldRef<"Announcement", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Announcement findUnique
   */
  export type AnnouncementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findUniqueOrThrow
   */
  export type AnnouncementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement findFirst
   */
  export type AnnouncementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findFirstOrThrow
   */
  export type AnnouncementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcement to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Announcements.
     */
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement findMany
   */
  export type AnnouncementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter, which Announcements to fetch.
     */
    where?: AnnouncementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Announcements to fetch.
     */
    orderBy?: AnnouncementOrderByWithRelationInput | AnnouncementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Announcements.
     */
    cursor?: AnnouncementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Announcements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Announcements.
     */
    skip?: number
    distinct?: AnnouncementScalarFieldEnum | AnnouncementScalarFieldEnum[]
  }

  /**
   * Announcement create
   */
  export type AnnouncementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to create a Announcement.
     */
    data: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
  }

  /**
   * Announcement createMany
   */
  export type AnnouncementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Announcement createManyAndReturn
   */
  export type AnnouncementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Announcements.
     */
    data: AnnouncementCreateManyInput | AnnouncementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Announcement update
   */
  export type AnnouncementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The data needed to update a Announcement.
     */
    data: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
    /**
     * Choose, which Announcement to update.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement updateMany
   */
  export type AnnouncementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Announcements.
     */
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyInput>
    /**
     * Filter which Announcements to update
     */
    where?: AnnouncementWhereInput
  }

  /**
   * Announcement upsert
   */
  export type AnnouncementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * The filter to search for the Announcement to update in case it exists.
     */
    where: AnnouncementWhereUniqueInput
    /**
     * In case the Announcement found by the `where` argument doesn't exist, create a new Announcement with this data.
     */
    create: XOR<AnnouncementCreateInput, AnnouncementUncheckedCreateInput>
    /**
     * In case the Announcement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AnnouncementUpdateInput, AnnouncementUncheckedUpdateInput>
  }

  /**
   * Announcement delete
   */
  export type AnnouncementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
    /**
     * Filter which Announcement to delete.
     */
    where: AnnouncementWhereUniqueInput
  }

  /**
   * Announcement deleteMany
   */
  export type AnnouncementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Announcements to delete
     */
    where?: AnnouncementWhereInput
  }

  /**
   * Announcement.class
   */
  export type Announcement$classArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Class
     */
    select?: ClassSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClassInclude<ExtArgs> | null
    where?: ClassWhereInput
  }

  /**
   * Announcement without action
   */
  export type AnnouncementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Announcement
     */
    select?: AnnouncementSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AnnouncementInclude<ExtArgs> | null
  }


  /**
   * Model Submission
   */

  export type AggregateSubmission = {
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  export type SubmissionAvgAggregateOutputType = {
    id: number | null
    assignment_id: number | null
    student_id: number | null
  }

  export type SubmissionSumAggregateOutputType = {
    id: number | null
    assignment_id: number | null
    student_id: number | null
  }

  export type SubmissionMinAggregateOutputType = {
    id: number | null
    assignment_id: number | null
    student_id: number | null
    file_url: string | null
    submitted_at: Date | null
    status: string | null
  }

  export type SubmissionMaxAggregateOutputType = {
    id: number | null
    assignment_id: number | null
    student_id: number | null
    file_url: string | null
    submitted_at: Date | null
    status: string | null
  }

  export type SubmissionCountAggregateOutputType = {
    id: number
    assignment_id: number
    student_id: number
    file_url: number
    submitted_at: number
    status: number
    _all: number
  }


  export type SubmissionAvgAggregateInputType = {
    id?: true
    assignment_id?: true
    student_id?: true
  }

  export type SubmissionSumAggregateInputType = {
    id?: true
    assignment_id?: true
    student_id?: true
  }

  export type SubmissionMinAggregateInputType = {
    id?: true
    assignment_id?: true
    student_id?: true
    file_url?: true
    submitted_at?: true
    status?: true
  }

  export type SubmissionMaxAggregateInputType = {
    id?: true
    assignment_id?: true
    student_id?: true
    file_url?: true
    submitted_at?: true
    status?: true
  }

  export type SubmissionCountAggregateInputType = {
    id?: true
    assignment_id?: true
    student_id?: true
    file_url?: true
    submitted_at?: true
    status?: true
    _all?: true
  }

  export type SubmissionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submission to aggregate.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Submissions
    **/
    _count?: true | SubmissionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SubmissionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SubmissionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubmissionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubmissionMaxAggregateInputType
  }

  export type GetSubmissionAggregateType<T extends SubmissionAggregateArgs> = {
        [P in keyof T & keyof AggregateSubmission]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubmission[P]>
      : GetScalarType<T[P], AggregateSubmission[P]>
  }




  export type SubmissionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubmissionWhereInput
    orderBy?: SubmissionOrderByWithAggregationInput | SubmissionOrderByWithAggregationInput[]
    by: SubmissionScalarFieldEnum[] | SubmissionScalarFieldEnum
    having?: SubmissionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubmissionCountAggregateInputType | true
    _avg?: SubmissionAvgAggregateInputType
    _sum?: SubmissionSumAggregateInputType
    _min?: SubmissionMinAggregateInputType
    _max?: SubmissionMaxAggregateInputType
  }

  export type SubmissionGroupByOutputType = {
    id: number
    assignment_id: number
    student_id: number
    file_url: string
    submitted_at: Date
    status: string
    _count: SubmissionCountAggregateOutputType | null
    _avg: SubmissionAvgAggregateOutputType | null
    _sum: SubmissionSumAggregateOutputType | null
    _min: SubmissionMinAggregateOutputType | null
    _max: SubmissionMaxAggregateOutputType | null
  }

  type GetSubmissionGroupByPayload<T extends SubmissionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubmissionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubmissionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
            : GetScalarType<T[P], SubmissionGroupByOutputType[P]>
        }
      >
    >


  export type SubmissionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    file_url?: boolean
    submitted_at?: boolean
    status?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    file_url?: boolean
    submitted_at?: boolean
    status?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["submission"]>

  export type SubmissionSelectScalar = {
    id?: boolean
    assignment_id?: boolean
    student_id?: boolean
    file_url?: boolean
    submitted_at?: boolean
    status?: boolean
  }

  export type SubmissionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SubmissionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    student?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SubmissionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Submission"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      student: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      assignment_id: number
      student_id: number
      file_url: string
      submitted_at: Date
      status: string
    }, ExtArgs["result"]["submission"]>
    composites: {}
  }

  type SubmissionGetPayload<S extends boolean | null | undefined | SubmissionDefaultArgs> = $Result.GetResult<Prisma.$SubmissionPayload, S>

  type SubmissionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SubmissionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SubmissionCountAggregateInputType | true
    }

  export interface SubmissionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Submission'], meta: { name: 'Submission' } }
    /**
     * Find zero or one Submission that matches the filter.
     * @param {SubmissionFindUniqueArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubmissionFindUniqueArgs>(args: SelectSubset<T, SubmissionFindUniqueArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Submission that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SubmissionFindUniqueOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubmissionFindUniqueOrThrowArgs>(args: SelectSubset<T, SubmissionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Submission that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubmissionFindFirstArgs>(args?: SelectSubset<T, SubmissionFindFirstArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Submission that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindFirstOrThrowArgs} args - Arguments to find a Submission
     * @example
     * // Get one Submission
     * const submission = await prisma.submission.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubmissionFindFirstOrThrowArgs>(args?: SelectSubset<T, SubmissionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Submissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Submissions
     * const submissions = await prisma.submission.findMany()
     * 
     * // Get first 10 Submissions
     * const submissions = await prisma.submission.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const submissionWithIdOnly = await prisma.submission.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubmissionFindManyArgs>(args?: SelectSubset<T, SubmissionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Submission.
     * @param {SubmissionCreateArgs} args - Arguments to create a Submission.
     * @example
     * // Create one Submission
     * const Submission = await prisma.submission.create({
     *   data: {
     *     // ... data to create a Submission
     *   }
     * })
     * 
     */
    create<T extends SubmissionCreateArgs>(args: SelectSubset<T, SubmissionCreateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Submissions.
     * @param {SubmissionCreateManyArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubmissionCreateManyArgs>(args?: SelectSubset<T, SubmissionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Submissions and returns the data saved in the database.
     * @param {SubmissionCreateManyAndReturnArgs} args - Arguments to create many Submissions.
     * @example
     * // Create many Submissions
     * const submission = await prisma.submission.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Submissions and only return the `id`
     * const submissionWithIdOnly = await prisma.submission.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubmissionCreateManyAndReturnArgs>(args?: SelectSubset<T, SubmissionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Submission.
     * @param {SubmissionDeleteArgs} args - Arguments to delete one Submission.
     * @example
     * // Delete one Submission
     * const Submission = await prisma.submission.delete({
     *   where: {
     *     // ... filter to delete one Submission
     *   }
     * })
     * 
     */
    delete<T extends SubmissionDeleteArgs>(args: SelectSubset<T, SubmissionDeleteArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Submission.
     * @param {SubmissionUpdateArgs} args - Arguments to update one Submission.
     * @example
     * // Update one Submission
     * const submission = await prisma.submission.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubmissionUpdateArgs>(args: SelectSubset<T, SubmissionUpdateArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Submissions.
     * @param {SubmissionDeleteManyArgs} args - Arguments to filter Submissions to delete.
     * @example
     * // Delete a few Submissions
     * const { count } = await prisma.submission.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubmissionDeleteManyArgs>(args?: SelectSubset<T, SubmissionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Submissions
     * const submission = await prisma.submission.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubmissionUpdateManyArgs>(args: SelectSubset<T, SubmissionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Submission.
     * @param {SubmissionUpsertArgs} args - Arguments to update or create a Submission.
     * @example
     * // Update or create a Submission
     * const submission = await prisma.submission.upsert({
     *   create: {
     *     // ... data to create a Submission
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Submission we want to update
     *   }
     * })
     */
    upsert<T extends SubmissionUpsertArgs>(args: SelectSubset<T, SubmissionUpsertArgs<ExtArgs>>): Prisma__SubmissionClient<$Result.GetResult<Prisma.$SubmissionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Submissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionCountArgs} args - Arguments to filter Submissions to count.
     * @example
     * // Count the number of Submissions
     * const count = await prisma.submission.count({
     *   where: {
     *     // ... the filter for the Submissions we want to count
     *   }
     * })
    **/
    count<T extends SubmissionCountArgs>(
      args?: Subset<T, SubmissionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubmissionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubmissionAggregateArgs>(args: Subset<T, SubmissionAggregateArgs>): Prisma.PrismaPromise<GetSubmissionAggregateType<T>>

    /**
     * Group by Submission.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubmissionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubmissionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubmissionGroupByArgs['orderBy'] }
        : { orderBy?: SubmissionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubmissionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubmissionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Submission model
   */
  readonly fields: SubmissionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Submission.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubmissionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    student<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Submission model
   */ 
  interface SubmissionFieldRefs {
    readonly id: FieldRef<"Submission", 'Int'>
    readonly assignment_id: FieldRef<"Submission", 'Int'>
    readonly student_id: FieldRef<"Submission", 'Int'>
    readonly file_url: FieldRef<"Submission", 'String'>
    readonly submitted_at: FieldRef<"Submission", 'DateTime'>
    readonly status: FieldRef<"Submission", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Submission findUnique
   */
  export type SubmissionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findUniqueOrThrow
   */
  export type SubmissionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission findFirst
   */
  export type SubmissionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findFirstOrThrow
   */
  export type SubmissionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submission to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Submissions.
     */
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission findMany
   */
  export type SubmissionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter, which Submissions to fetch.
     */
    where?: SubmissionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Submissions to fetch.
     */
    orderBy?: SubmissionOrderByWithRelationInput | SubmissionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Submissions.
     */
    cursor?: SubmissionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Submissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Submissions.
     */
    skip?: number
    distinct?: SubmissionScalarFieldEnum | SubmissionScalarFieldEnum[]
  }

  /**
   * Submission create
   */
  export type SubmissionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to create a Submission.
     */
    data: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
  }

  /**
   * Submission createMany
   */
  export type SubmissionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Submission createManyAndReturn
   */
  export type SubmissionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Submissions.
     */
    data: SubmissionCreateManyInput | SubmissionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Submission update
   */
  export type SubmissionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The data needed to update a Submission.
     */
    data: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
    /**
     * Choose, which Submission to update.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission updateMany
   */
  export type SubmissionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Submissions.
     */
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyInput>
    /**
     * Filter which Submissions to update
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission upsert
   */
  export type SubmissionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * The filter to search for the Submission to update in case it exists.
     */
    where: SubmissionWhereUniqueInput
    /**
     * In case the Submission found by the `where` argument doesn't exist, create a new Submission with this data.
     */
    create: XOR<SubmissionCreateInput, SubmissionUncheckedCreateInput>
    /**
     * In case the Submission was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubmissionUpdateInput, SubmissionUncheckedUpdateInput>
  }

  /**
   * Submission delete
   */
  export type SubmissionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
    /**
     * Filter which Submission to delete.
     */
    where: SubmissionWhereUniqueInput
  }

  /**
   * Submission deleteMany
   */
  export type SubmissionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Submissions to delete
     */
    where?: SubmissionWhereInput
  }

  /**
   * Submission without action
   */
  export type SubmissionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Submission
     */
    select?: SubmissionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubmissionInclude<ExtArgs> | null
  }


  /**
   * Model PerangkatPembelajaran
   */

  export type AggregatePerangkatPembelajaran = {
    _count: PerangkatPembelajaranCountAggregateOutputType | null
    _avg: PerangkatPembelajaranAvgAggregateOutputType | null
    _sum: PerangkatPembelajaranSumAggregateOutputType | null
    _min: PerangkatPembelajaranMinAggregateOutputType | null
    _max: PerangkatPembelajaranMaxAggregateOutputType | null
  }

  export type PerangkatPembelajaranAvgAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type PerangkatPembelajaranSumAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
  }

  export type PerangkatPembelajaranMinAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    file_url: string | null
    type: string | null
    createdAt: Date | null
  }

  export type PerangkatPembelajaranMaxAggregateOutputType = {
    id: number | null
    class_id: number | null
    subject_id: number | null
    teacher_id: number | null
    title: string | null
    description: string | null
    file_url: string | null
    type: string | null
    createdAt: Date | null
  }

  export type PerangkatPembelajaranCountAggregateOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: number
    description: number
    file_url: number
    type: number
    createdAt: number
    _all: number
  }


  export type PerangkatPembelajaranAvgAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type PerangkatPembelajaranSumAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
  }

  export type PerangkatPembelajaranMinAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    file_url?: true
    type?: true
    createdAt?: true
  }

  export type PerangkatPembelajaranMaxAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    file_url?: true
    type?: true
    createdAt?: true
  }

  export type PerangkatPembelajaranCountAggregateInputType = {
    id?: true
    class_id?: true
    subject_id?: true
    teacher_id?: true
    title?: true
    description?: true
    file_url?: true
    type?: true
    createdAt?: true
    _all?: true
  }

  export type PerangkatPembelajaranAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerangkatPembelajaran to aggregate.
     */
    where?: PerangkatPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerangkatPembelajarans to fetch.
     */
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PerangkatPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerangkatPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerangkatPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PerangkatPembelajarans
    **/
    _count?: true | PerangkatPembelajaranCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PerangkatPembelajaranAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PerangkatPembelajaranSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PerangkatPembelajaranMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PerangkatPembelajaranMaxAggregateInputType
  }

  export type GetPerangkatPembelajaranAggregateType<T extends PerangkatPembelajaranAggregateArgs> = {
        [P in keyof T & keyof AggregatePerangkatPembelajaran]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePerangkatPembelajaran[P]>
      : GetScalarType<T[P], AggregatePerangkatPembelajaran[P]>
  }




  export type PerangkatPembelajaranGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PerangkatPembelajaranWhereInput
    orderBy?: PerangkatPembelajaranOrderByWithAggregationInput | PerangkatPembelajaranOrderByWithAggregationInput[]
    by: PerangkatPembelajaranScalarFieldEnum[] | PerangkatPembelajaranScalarFieldEnum
    having?: PerangkatPembelajaranScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PerangkatPembelajaranCountAggregateInputType | true
    _avg?: PerangkatPembelajaranAvgAggregateInputType
    _sum?: PerangkatPembelajaranSumAggregateInputType
    _min?: PerangkatPembelajaranMinAggregateInputType
    _max?: PerangkatPembelajaranMaxAggregateInputType
  }

  export type PerangkatPembelajaranGroupByOutputType = {
    id: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description: string | null
    file_url: string | null
    type: string
    createdAt: Date
    _count: PerangkatPembelajaranCountAggregateOutputType | null
    _avg: PerangkatPembelajaranAvgAggregateOutputType | null
    _sum: PerangkatPembelajaranSumAggregateOutputType | null
    _min: PerangkatPembelajaranMinAggregateOutputType | null
    _max: PerangkatPembelajaranMaxAggregateOutputType | null
  }

  type GetPerangkatPembelajaranGroupByPayload<T extends PerangkatPembelajaranGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PerangkatPembelajaranGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PerangkatPembelajaranGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PerangkatPembelajaranGroupByOutputType[P]>
            : GetScalarType<T[P], PerangkatPembelajaranGroupByOutputType[P]>
        }
      >
    >


  export type PerangkatPembelajaranSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    file_url?: boolean
    type?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perangkatPembelajaran"]>

  export type PerangkatPembelajaranSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    file_url?: boolean
    type?: boolean
    createdAt?: boolean
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["perangkatPembelajaran"]>

  export type PerangkatPembelajaranSelectScalar = {
    id?: boolean
    class_id?: boolean
    subject_id?: boolean
    teacher_id?: boolean
    title?: boolean
    description?: boolean
    file_url?: boolean
    type?: boolean
    createdAt?: boolean
  }

  export type PerangkatPembelajaranInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PerangkatPembelajaranIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    class?: boolean | ClassDefaultArgs<ExtArgs>
    subject?: boolean | SubjectDefaultArgs<ExtArgs>
    teacher?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PerangkatPembelajaranPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PerangkatPembelajaran"
    objects: {
      class: Prisma.$ClassPayload<ExtArgs>
      subject: Prisma.$SubjectPayload<ExtArgs>
      teacher: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      class_id: number
      subject_id: number
      teacher_id: number
      title: string
      description: string | null
      file_url: string | null
      type: string
      createdAt: Date
    }, ExtArgs["result"]["perangkatPembelajaran"]>
    composites: {}
  }

  type PerangkatPembelajaranGetPayload<S extends boolean | null | undefined | PerangkatPembelajaranDefaultArgs> = $Result.GetResult<Prisma.$PerangkatPembelajaranPayload, S>

  type PerangkatPembelajaranCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PerangkatPembelajaranFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PerangkatPembelajaranCountAggregateInputType | true
    }

  export interface PerangkatPembelajaranDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PerangkatPembelajaran'], meta: { name: 'PerangkatPembelajaran' } }
    /**
     * Find zero or one PerangkatPembelajaran that matches the filter.
     * @param {PerangkatPembelajaranFindUniqueArgs} args - Arguments to find a PerangkatPembelajaran
     * @example
     * // Get one PerangkatPembelajaran
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PerangkatPembelajaranFindUniqueArgs>(args: SelectSubset<T, PerangkatPembelajaranFindUniqueArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PerangkatPembelajaran that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PerangkatPembelajaranFindUniqueOrThrowArgs} args - Arguments to find a PerangkatPembelajaran
     * @example
     * // Get one PerangkatPembelajaran
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PerangkatPembelajaranFindUniqueOrThrowArgs>(args: SelectSubset<T, PerangkatPembelajaranFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PerangkatPembelajaran that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranFindFirstArgs} args - Arguments to find a PerangkatPembelajaran
     * @example
     * // Get one PerangkatPembelajaran
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PerangkatPembelajaranFindFirstArgs>(args?: SelectSubset<T, PerangkatPembelajaranFindFirstArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PerangkatPembelajaran that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranFindFirstOrThrowArgs} args - Arguments to find a PerangkatPembelajaran
     * @example
     * // Get one PerangkatPembelajaran
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PerangkatPembelajaranFindFirstOrThrowArgs>(args?: SelectSubset<T, PerangkatPembelajaranFindFirstOrThrowArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PerangkatPembelajarans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PerangkatPembelajarans
     * const perangkatPembelajarans = await prisma.perangkatPembelajaran.findMany()
     * 
     * // Get first 10 PerangkatPembelajarans
     * const perangkatPembelajarans = await prisma.perangkatPembelajaran.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const perangkatPembelajaranWithIdOnly = await prisma.perangkatPembelajaran.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PerangkatPembelajaranFindManyArgs>(args?: SelectSubset<T, PerangkatPembelajaranFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PerangkatPembelajaran.
     * @param {PerangkatPembelajaranCreateArgs} args - Arguments to create a PerangkatPembelajaran.
     * @example
     * // Create one PerangkatPembelajaran
     * const PerangkatPembelajaran = await prisma.perangkatPembelajaran.create({
     *   data: {
     *     // ... data to create a PerangkatPembelajaran
     *   }
     * })
     * 
     */
    create<T extends PerangkatPembelajaranCreateArgs>(args: SelectSubset<T, PerangkatPembelajaranCreateArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PerangkatPembelajarans.
     * @param {PerangkatPembelajaranCreateManyArgs} args - Arguments to create many PerangkatPembelajarans.
     * @example
     * // Create many PerangkatPembelajarans
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PerangkatPembelajaranCreateManyArgs>(args?: SelectSubset<T, PerangkatPembelajaranCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PerangkatPembelajarans and returns the data saved in the database.
     * @param {PerangkatPembelajaranCreateManyAndReturnArgs} args - Arguments to create many PerangkatPembelajarans.
     * @example
     * // Create many PerangkatPembelajarans
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PerangkatPembelajarans and only return the `id`
     * const perangkatPembelajaranWithIdOnly = await prisma.perangkatPembelajaran.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PerangkatPembelajaranCreateManyAndReturnArgs>(args?: SelectSubset<T, PerangkatPembelajaranCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PerangkatPembelajaran.
     * @param {PerangkatPembelajaranDeleteArgs} args - Arguments to delete one PerangkatPembelajaran.
     * @example
     * // Delete one PerangkatPembelajaran
     * const PerangkatPembelajaran = await prisma.perangkatPembelajaran.delete({
     *   where: {
     *     // ... filter to delete one PerangkatPembelajaran
     *   }
     * })
     * 
     */
    delete<T extends PerangkatPembelajaranDeleteArgs>(args: SelectSubset<T, PerangkatPembelajaranDeleteArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PerangkatPembelajaran.
     * @param {PerangkatPembelajaranUpdateArgs} args - Arguments to update one PerangkatPembelajaran.
     * @example
     * // Update one PerangkatPembelajaran
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PerangkatPembelajaranUpdateArgs>(args: SelectSubset<T, PerangkatPembelajaranUpdateArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PerangkatPembelajarans.
     * @param {PerangkatPembelajaranDeleteManyArgs} args - Arguments to filter PerangkatPembelajarans to delete.
     * @example
     * // Delete a few PerangkatPembelajarans
     * const { count } = await prisma.perangkatPembelajaran.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PerangkatPembelajaranDeleteManyArgs>(args?: SelectSubset<T, PerangkatPembelajaranDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PerangkatPembelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PerangkatPembelajarans
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PerangkatPembelajaranUpdateManyArgs>(args: SelectSubset<T, PerangkatPembelajaranUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PerangkatPembelajaran.
     * @param {PerangkatPembelajaranUpsertArgs} args - Arguments to update or create a PerangkatPembelajaran.
     * @example
     * // Update or create a PerangkatPembelajaran
     * const perangkatPembelajaran = await prisma.perangkatPembelajaran.upsert({
     *   create: {
     *     // ... data to create a PerangkatPembelajaran
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PerangkatPembelajaran we want to update
     *   }
     * })
     */
    upsert<T extends PerangkatPembelajaranUpsertArgs>(args: SelectSubset<T, PerangkatPembelajaranUpsertArgs<ExtArgs>>): Prisma__PerangkatPembelajaranClient<$Result.GetResult<Prisma.$PerangkatPembelajaranPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PerangkatPembelajarans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranCountArgs} args - Arguments to filter PerangkatPembelajarans to count.
     * @example
     * // Count the number of PerangkatPembelajarans
     * const count = await prisma.perangkatPembelajaran.count({
     *   where: {
     *     // ... the filter for the PerangkatPembelajarans we want to count
     *   }
     * })
    **/
    count<T extends PerangkatPembelajaranCountArgs>(
      args?: Subset<T, PerangkatPembelajaranCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PerangkatPembelajaranCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PerangkatPembelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PerangkatPembelajaranAggregateArgs>(args: Subset<T, PerangkatPembelajaranAggregateArgs>): Prisma.PrismaPromise<GetPerangkatPembelajaranAggregateType<T>>

    /**
     * Group by PerangkatPembelajaran.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PerangkatPembelajaranGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PerangkatPembelajaranGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PerangkatPembelajaranGroupByArgs['orderBy'] }
        : { orderBy?: PerangkatPembelajaranGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PerangkatPembelajaranGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPerangkatPembelajaranGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PerangkatPembelajaran model
   */
  readonly fields: PerangkatPembelajaranFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PerangkatPembelajaran.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PerangkatPembelajaranClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    class<T extends ClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClassDefaultArgs<ExtArgs>>): Prisma__ClassClient<$Result.GetResult<Prisma.$ClassPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    subject<T extends SubjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SubjectDefaultArgs<ExtArgs>>): Prisma__SubjectClient<$Result.GetResult<Prisma.$SubjectPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teacher<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PerangkatPembelajaran model
   */ 
  interface PerangkatPembelajaranFieldRefs {
    readonly id: FieldRef<"PerangkatPembelajaran", 'Int'>
    readonly class_id: FieldRef<"PerangkatPembelajaran", 'Int'>
    readonly subject_id: FieldRef<"PerangkatPembelajaran", 'Int'>
    readonly teacher_id: FieldRef<"PerangkatPembelajaran", 'Int'>
    readonly title: FieldRef<"PerangkatPembelajaran", 'String'>
    readonly description: FieldRef<"PerangkatPembelajaran", 'String'>
    readonly file_url: FieldRef<"PerangkatPembelajaran", 'String'>
    readonly type: FieldRef<"PerangkatPembelajaran", 'String'>
    readonly createdAt: FieldRef<"PerangkatPembelajaran", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PerangkatPembelajaran findUnique
   */
  export type PerangkatPembelajaranFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which PerangkatPembelajaran to fetch.
     */
    where: PerangkatPembelajaranWhereUniqueInput
  }

  /**
   * PerangkatPembelajaran findUniqueOrThrow
   */
  export type PerangkatPembelajaranFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which PerangkatPembelajaran to fetch.
     */
    where: PerangkatPembelajaranWhereUniqueInput
  }

  /**
   * PerangkatPembelajaran findFirst
   */
  export type PerangkatPembelajaranFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which PerangkatPembelajaran to fetch.
     */
    where?: PerangkatPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerangkatPembelajarans to fetch.
     */
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerangkatPembelajarans.
     */
    cursor?: PerangkatPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerangkatPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerangkatPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerangkatPembelajarans.
     */
    distinct?: PerangkatPembelajaranScalarFieldEnum | PerangkatPembelajaranScalarFieldEnum[]
  }

  /**
   * PerangkatPembelajaran findFirstOrThrow
   */
  export type PerangkatPembelajaranFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which PerangkatPembelajaran to fetch.
     */
    where?: PerangkatPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerangkatPembelajarans to fetch.
     */
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PerangkatPembelajarans.
     */
    cursor?: PerangkatPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerangkatPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerangkatPembelajarans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PerangkatPembelajarans.
     */
    distinct?: PerangkatPembelajaranScalarFieldEnum | PerangkatPembelajaranScalarFieldEnum[]
  }

  /**
   * PerangkatPembelajaran findMany
   */
  export type PerangkatPembelajaranFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * Filter, which PerangkatPembelajarans to fetch.
     */
    where?: PerangkatPembelajaranWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PerangkatPembelajarans to fetch.
     */
    orderBy?: PerangkatPembelajaranOrderByWithRelationInput | PerangkatPembelajaranOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PerangkatPembelajarans.
     */
    cursor?: PerangkatPembelajaranWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PerangkatPembelajarans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PerangkatPembelajarans.
     */
    skip?: number
    distinct?: PerangkatPembelajaranScalarFieldEnum | PerangkatPembelajaranScalarFieldEnum[]
  }

  /**
   * PerangkatPembelajaran create
   */
  export type PerangkatPembelajaranCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * The data needed to create a PerangkatPembelajaran.
     */
    data: XOR<PerangkatPembelajaranCreateInput, PerangkatPembelajaranUncheckedCreateInput>
  }

  /**
   * PerangkatPembelajaran createMany
   */
  export type PerangkatPembelajaranCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PerangkatPembelajarans.
     */
    data: PerangkatPembelajaranCreateManyInput | PerangkatPembelajaranCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PerangkatPembelajaran createManyAndReturn
   */
  export type PerangkatPembelajaranCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PerangkatPembelajarans.
     */
    data: PerangkatPembelajaranCreateManyInput | PerangkatPembelajaranCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PerangkatPembelajaran update
   */
  export type PerangkatPembelajaranUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * The data needed to update a PerangkatPembelajaran.
     */
    data: XOR<PerangkatPembelajaranUpdateInput, PerangkatPembelajaranUncheckedUpdateInput>
    /**
     * Choose, which PerangkatPembelajaran to update.
     */
    where: PerangkatPembelajaranWhereUniqueInput
  }

  /**
   * PerangkatPembelajaran updateMany
   */
  export type PerangkatPembelajaranUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PerangkatPembelajarans.
     */
    data: XOR<PerangkatPembelajaranUpdateManyMutationInput, PerangkatPembelajaranUncheckedUpdateManyInput>
    /**
     * Filter which PerangkatPembelajarans to update
     */
    where?: PerangkatPembelajaranWhereInput
  }

  /**
   * PerangkatPembelajaran upsert
   */
  export type PerangkatPembelajaranUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * The filter to search for the PerangkatPembelajaran to update in case it exists.
     */
    where: PerangkatPembelajaranWhereUniqueInput
    /**
     * In case the PerangkatPembelajaran found by the `where` argument doesn't exist, create a new PerangkatPembelajaran with this data.
     */
    create: XOR<PerangkatPembelajaranCreateInput, PerangkatPembelajaranUncheckedCreateInput>
    /**
     * In case the PerangkatPembelajaran was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PerangkatPembelajaranUpdateInput, PerangkatPembelajaranUncheckedUpdateInput>
  }

  /**
   * PerangkatPembelajaran delete
   */
  export type PerangkatPembelajaranDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
    /**
     * Filter which PerangkatPembelajaran to delete.
     */
    where: PerangkatPembelajaranWhereUniqueInput
  }

  /**
   * PerangkatPembelajaran deleteMany
   */
  export type PerangkatPembelajaranDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PerangkatPembelajarans to delete
     */
    where?: PerangkatPembelajaranWhereInput
  }

  /**
   * PerangkatPembelajaran without action
   */
  export type PerangkatPembelajaranDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PerangkatPembelajaran
     */
    select?: PerangkatPembelajaranSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PerangkatPembelajaranInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    username: 'username',
    email: 'email',
    password_hash: 'password_hash',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RoleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserRoleScalarFieldEnum: {
    user_id: 'user_id',
    role_id: 'role_id'
  };

  export type UserRoleScalarFieldEnum = (typeof UserRoleScalarFieldEnum)[keyof typeof UserRoleScalarFieldEnum]


  export const SubjectScalarFieldEnum: {
    id: 'id',
    subject_name: 'subject_name',
    code: 'code'
  };

  export type SubjectScalarFieldEnum = (typeof SubjectScalarFieldEnum)[keyof typeof SubjectScalarFieldEnum]


  export const ClassScalarFieldEnum: {
    id: 'id',
    class_name: 'class_name',
    grade_level: 'grade_level'
  };

  export type ClassScalarFieldEnum = (typeof ClassScalarFieldEnum)[keyof typeof ClassScalarFieldEnum]


  export const TeacherAssignScalarFieldEnum: {
    id: 'id',
    teacher_id: 'teacher_id',
    class_id: 'class_id',
    subject_id: 'subject_id'
  };

  export type TeacherAssignScalarFieldEnum = (typeof TeacherAssignScalarFieldEnum)[keyof typeof TeacherAssignScalarFieldEnum]


  export const EnrollmentScalarFieldEnum: {
    id: 'id',
    student_id: 'student_id',
    class_id: 'class_id'
  };

  export type EnrollmentScalarFieldEnum = (typeof EnrollmentScalarFieldEnum)[keyof typeof EnrollmentScalarFieldEnum]


  export const MaterialScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id',
    title: 'title',
    description: 'description',
    file_url: 'file_url',
    createdAt: 'createdAt'
  };

  export type MaterialScalarFieldEnum = (typeof MaterialScalarFieldEnum)[keyof typeof MaterialScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id',
    title: 'title',
    description: 'description',
    attachment_url: 'attachment_url',
    due_at: 'due_at',
    createdAt: 'createdAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const AnnouncementScalarFieldEnum: {
    id: 'id',
    scope: 'scope',
    class_id: 'class_id',
    created_by: 'created_by',
    title: 'title',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type AnnouncementScalarFieldEnum = (typeof AnnouncementScalarFieldEnum)[keyof typeof AnnouncementScalarFieldEnum]


  export const SubmissionScalarFieldEnum: {
    id: 'id',
    assignment_id: 'assignment_id',
    student_id: 'student_id',
    file_url: 'file_url',
    submitted_at: 'submitted_at',
    status: 'status'
  };

  export type SubmissionScalarFieldEnum = (typeof SubmissionScalarFieldEnum)[keyof typeof SubmissionScalarFieldEnum]


  export const PerangkatPembelajaranScalarFieldEnum: {
    id: 'id',
    class_id: 'class_id',
    subject_id: 'subject_id',
    teacher_id: 'teacher_id',
    title: 'title',
    description: 'description',
    file_url: 'file_url',
    type: 'type',
    createdAt: 'createdAt'
  };

  export type PerangkatPembelajaranScalarFieldEnum = (typeof PerangkatPembelajaranScalarFieldEnum)[keyof typeof PerangkatPembelajaranScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    full_name?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    teacherAssign?: TeacherAssignListRelationFilter
    materials?: MaterialListRelationFilter
    assignments?: AssignmentListRelationFilter
    announcements?: AnnouncementListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    perangkat_pembelajaran?: PerangkatPembelajaranListRelationFilter
    student_submissions?: SubmissionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    roles?: UserRoleOrderByRelationAggregateInput
    teacherAssign?: TeacherAssignOrderByRelationAggregateInput
    materials?: MaterialOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    perangkat_pembelajaran?: PerangkatPembelajaranOrderByRelationAggregateInput
    student_submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    full_name?: StringFilter<"User"> | string
    password_hash?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    roles?: UserRoleListRelationFilter
    teacherAssign?: TeacherAssignListRelationFilter
    materials?: MaterialListRelationFilter
    assignments?: AssignmentListRelationFilter
    announcements?: AnnouncementListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    perangkat_pembelajaran?: PerangkatPembelajaranListRelationFilter
    student_submissions?: SubmissionListRelationFilter
  }, "id" | "username" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    full_name?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password_hash?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: IntFilter<"Role"> | number
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserRoleListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    users?: UserRoleOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    users?: UserRoleListRelationFilter
  }, "id" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: RoleCountOrderByAggregateInput
    _avg?: RoleAvgOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
    _sum?: RoleSumOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Role"> | number
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
  }

  export type UserRoleWhereInput = {
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    user_id?: IntFilter<"UserRole"> | number
    role_id?: IntFilter<"UserRole"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }

  export type UserRoleOrderByWithRelationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type UserRoleWhereUniqueInput = Prisma.AtLeast<{
    user_id_role_id?: UserRoleUser_idRole_idCompoundUniqueInput
    AND?: UserRoleWhereInput | UserRoleWhereInput[]
    OR?: UserRoleWhereInput[]
    NOT?: UserRoleWhereInput | UserRoleWhereInput[]
    user_id?: IntFilter<"UserRole"> | number
    role_id?: IntFilter<"UserRole"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    role?: XOR<RoleRelationFilter, RoleWhereInput>
  }, "user_id_role_id">

  export type UserRoleOrderByWithAggregationInput = {
    user_id?: SortOrder
    role_id?: SortOrder
    _count?: UserRoleCountOrderByAggregateInput
    _avg?: UserRoleAvgOrderByAggregateInput
    _max?: UserRoleMaxOrderByAggregateInput
    _min?: UserRoleMinOrderByAggregateInput
    _sum?: UserRoleSumOrderByAggregateInput
  }

  export type UserRoleScalarWhereWithAggregatesInput = {
    AND?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    OR?: UserRoleScalarWhereWithAggregatesInput[]
    NOT?: UserRoleScalarWhereWithAggregatesInput | UserRoleScalarWhereWithAggregatesInput[]
    user_id?: IntWithAggregatesFilter<"UserRole"> | number
    role_id?: IntWithAggregatesFilter<"UserRole"> | number
  }

  export type SubjectWhereInput = {
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    id?: IntFilter<"Subject"> | number
    subject_name?: StringFilter<"Subject"> | string
    code?: StringNullableFilter<"Subject"> | string | null
    teacherAssign?: TeacherAssignListRelationFilter
    materials?: MaterialListRelationFilter
    assignments?: AssignmentListRelationFilter
    perangkat_pembelajaran?: PerangkatPembelajaranListRelationFilter
  }

  export type SubjectOrderByWithRelationInput = {
    id?: SortOrder
    subject_name?: SortOrder
    code?: SortOrderInput | SortOrder
    teacherAssign?: TeacherAssignOrderByRelationAggregateInput
    materials?: MaterialOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    perangkat_pembelajaran?: PerangkatPembelajaranOrderByRelationAggregateInput
  }

  export type SubjectWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SubjectWhereInput | SubjectWhereInput[]
    OR?: SubjectWhereInput[]
    NOT?: SubjectWhereInput | SubjectWhereInput[]
    subject_name?: StringFilter<"Subject"> | string
    code?: StringNullableFilter<"Subject"> | string | null
    teacherAssign?: TeacherAssignListRelationFilter
    materials?: MaterialListRelationFilter
    assignments?: AssignmentListRelationFilter
    perangkat_pembelajaran?: PerangkatPembelajaranListRelationFilter
  }, "id">

  export type SubjectOrderByWithAggregationInput = {
    id?: SortOrder
    subject_name?: SortOrder
    code?: SortOrderInput | SortOrder
    _count?: SubjectCountOrderByAggregateInput
    _avg?: SubjectAvgOrderByAggregateInput
    _max?: SubjectMaxOrderByAggregateInput
    _min?: SubjectMinOrderByAggregateInput
    _sum?: SubjectSumOrderByAggregateInput
  }

  export type SubjectScalarWhereWithAggregatesInput = {
    AND?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    OR?: SubjectScalarWhereWithAggregatesInput[]
    NOT?: SubjectScalarWhereWithAggregatesInput | SubjectScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Subject"> | number
    subject_name?: StringWithAggregatesFilter<"Subject"> | string
    code?: StringNullableWithAggregatesFilter<"Subject"> | string | null
  }

  export type ClassWhereInput = {
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    id?: IntFilter<"Class"> | number
    class_name?: StringFilter<"Class"> | string
    grade_level?: StringNullableFilter<"Class"> | string | null
    teacherAssign?: TeacherAssignListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    materials?: MaterialListRelationFilter
    assignments?: AssignmentListRelationFilter
    announcements?: AnnouncementListRelationFilter
    perangkat_pembelajaran?: PerangkatPembelajaranListRelationFilter
  }

  export type ClassOrderByWithRelationInput = {
    id?: SortOrder
    class_name?: SortOrder
    grade_level?: SortOrderInput | SortOrder
    teacherAssign?: TeacherAssignOrderByRelationAggregateInput
    enrollments?: EnrollmentOrderByRelationAggregateInput
    materials?: MaterialOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    announcements?: AnnouncementOrderByRelationAggregateInput
    perangkat_pembelajaran?: PerangkatPembelajaranOrderByRelationAggregateInput
  }

  export type ClassWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClassWhereInput | ClassWhereInput[]
    OR?: ClassWhereInput[]
    NOT?: ClassWhereInput | ClassWhereInput[]
    class_name?: StringFilter<"Class"> | string
    grade_level?: StringNullableFilter<"Class"> | string | null
    teacherAssign?: TeacherAssignListRelationFilter
    enrollments?: EnrollmentListRelationFilter
    materials?: MaterialListRelationFilter
    assignments?: AssignmentListRelationFilter
    announcements?: AnnouncementListRelationFilter
    perangkat_pembelajaran?: PerangkatPembelajaranListRelationFilter
  }, "id">

  export type ClassOrderByWithAggregationInput = {
    id?: SortOrder
    class_name?: SortOrder
    grade_level?: SortOrderInput | SortOrder
    _count?: ClassCountOrderByAggregateInput
    _avg?: ClassAvgOrderByAggregateInput
    _max?: ClassMaxOrderByAggregateInput
    _min?: ClassMinOrderByAggregateInput
    _sum?: ClassSumOrderByAggregateInput
  }

  export type ClassScalarWhereWithAggregatesInput = {
    AND?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    OR?: ClassScalarWhereWithAggregatesInput[]
    NOT?: ClassScalarWhereWithAggregatesInput | ClassScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Class"> | number
    class_name?: StringWithAggregatesFilter<"Class"> | string
    grade_level?: StringNullableWithAggregatesFilter<"Class"> | string | null
  }

  export type TeacherAssignWhereInput = {
    AND?: TeacherAssignWhereInput | TeacherAssignWhereInput[]
    OR?: TeacherAssignWhereInput[]
    NOT?: TeacherAssignWhereInput | TeacherAssignWhereInput[]
    id?: IntFilter<"TeacherAssign"> | number
    teacher_id?: IntFilter<"TeacherAssign"> | number
    class_id?: IntFilter<"TeacherAssign"> | number
    subject_id?: IntFilter<"TeacherAssign"> | number
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  }

  export type TeacherAssignOrderByWithRelationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
  }

  export type TeacherAssignWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherAssignWhereInput | TeacherAssignWhereInput[]
    OR?: TeacherAssignWhereInput[]
    NOT?: TeacherAssignWhereInput | TeacherAssignWhereInput[]
    teacher_id?: IntFilter<"TeacherAssign"> | number
    class_id?: IntFilter<"TeacherAssign"> | number
    subject_id?: IntFilter<"TeacherAssign"> | number
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
  }, "id">

  export type TeacherAssignOrderByWithAggregationInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    _count?: TeacherAssignCountOrderByAggregateInput
    _avg?: TeacherAssignAvgOrderByAggregateInput
    _max?: TeacherAssignMaxOrderByAggregateInput
    _min?: TeacherAssignMinOrderByAggregateInput
    _sum?: TeacherAssignSumOrderByAggregateInput
  }

  export type TeacherAssignScalarWhereWithAggregatesInput = {
    AND?: TeacherAssignScalarWhereWithAggregatesInput | TeacherAssignScalarWhereWithAggregatesInput[]
    OR?: TeacherAssignScalarWhereWithAggregatesInput[]
    NOT?: TeacherAssignScalarWhereWithAggregatesInput | TeacherAssignScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"TeacherAssign"> | number
    teacher_id?: IntWithAggregatesFilter<"TeacherAssign"> | number
    class_id?: IntWithAggregatesFilter<"TeacherAssign"> | number
    subject_id?: IntWithAggregatesFilter<"TeacherAssign"> | number
  }

  export type EnrollmentWhereInput = {
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    student_id?: IntFilter<"Enrollment"> | number
    class_id?: IntFilter<"Enrollment"> | number
    student?: XOR<UserRelationFilter, UserWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }

  export type EnrollmentOrderByWithRelationInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    student?: UserOrderByWithRelationInput
    class?: ClassOrderByWithRelationInput
  }

  export type EnrollmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EnrollmentWhereInput | EnrollmentWhereInput[]
    OR?: EnrollmentWhereInput[]
    NOT?: EnrollmentWhereInput | EnrollmentWhereInput[]
    student_id?: IntFilter<"Enrollment"> | number
    class_id?: IntFilter<"Enrollment"> | number
    student?: XOR<UserRelationFilter, UserWhereInput>
    class?: XOR<ClassRelationFilter, ClassWhereInput>
  }, "id">

  export type EnrollmentOrderByWithAggregationInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
    _count?: EnrollmentCountOrderByAggregateInput
    _avg?: EnrollmentAvgOrderByAggregateInput
    _max?: EnrollmentMaxOrderByAggregateInput
    _min?: EnrollmentMinOrderByAggregateInput
    _sum?: EnrollmentSumOrderByAggregateInput
  }

  export type EnrollmentScalarWhereWithAggregatesInput = {
    AND?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    OR?: EnrollmentScalarWhereWithAggregatesInput[]
    NOT?: EnrollmentScalarWhereWithAggregatesInput | EnrollmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Enrollment"> | number
    student_id?: IntWithAggregatesFilter<"Enrollment"> | number
    class_id?: IntWithAggregatesFilter<"Enrollment"> | number
  }

  export type MaterialWhereInput = {
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    id?: IntFilter<"Material"> | number
    class_id?: IntFilter<"Material"> | number
    subject_id?: IntFilter<"Material"> | number
    teacher_id?: IntFilter<"Material"> | number
    title?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    file_url?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MaterialOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type MaterialWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MaterialWhereInput | MaterialWhereInput[]
    OR?: MaterialWhereInput[]
    NOT?: MaterialWhereInput | MaterialWhereInput[]
    class_id?: IntFilter<"Material"> | number
    subject_id?: IntFilter<"Material"> | number
    teacher_id?: IntFilter<"Material"> | number
    title?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    file_url?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MaterialOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: MaterialCountOrderByAggregateInput
    _avg?: MaterialAvgOrderByAggregateInput
    _max?: MaterialMaxOrderByAggregateInput
    _min?: MaterialMinOrderByAggregateInput
    _sum?: MaterialSumOrderByAggregateInput
  }

  export type MaterialScalarWhereWithAggregatesInput = {
    AND?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    OR?: MaterialScalarWhereWithAggregatesInput[]
    NOT?: MaterialScalarWhereWithAggregatesInput | MaterialScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Material"> | number
    class_id?: IntWithAggregatesFilter<"Material"> | number
    subject_id?: IntWithAggregatesFilter<"Material"> | number
    teacher_id?: IntWithAggregatesFilter<"Material"> | number
    title?: StringWithAggregatesFilter<"Material"> | string
    description?: StringNullableWithAggregatesFilter<"Material"> | string | null
    file_url?: StringNullableWithAggregatesFilter<"Material"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Material"> | Date | string
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: IntFilter<"Assignment"> | number
    class_id?: IntFilter<"Assignment"> | number
    subject_id?: IntFilter<"Assignment"> | number
    teacher_id?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    attachment_url?: StringNullableFilter<"Assignment"> | string | null
    due_at?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attachment_url?: SortOrderInput | SortOrder
    due_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
    submissions?: SubmissionOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    class_id?: IntFilter<"Assignment"> | number
    subject_id?: IntFilter<"Assignment"> | number
    teacher_id?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    attachment_url?: StringNullableFilter<"Assignment"> | string | null
    due_at?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
    submissions?: SubmissionListRelationFilter
  }, "id">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    attachment_url?: SortOrderInput | SortOrder
    due_at?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Assignment"> | number
    class_id?: IntWithAggregatesFilter<"Assignment"> | number
    subject_id?: IntWithAggregatesFilter<"Assignment"> | number
    teacher_id?: IntWithAggregatesFilter<"Assignment"> | number
    title?: StringWithAggregatesFilter<"Assignment"> | string
    description?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    attachment_url?: StringNullableWithAggregatesFilter<"Assignment"> | string | null
    due_at?: DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type AnnouncementWhereInput = {
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    id?: IntFilter<"Announcement"> | number
    scope?: StringFilter<"Announcement"> | string
    class_id?: IntNullableFilter<"Announcement"> | number | null
    created_by?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    class?: XOR<ClassNullableRelationFilter, ClassWhereInput> | null
    creator?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AnnouncementOrderByWithRelationInput = {
    id?: SortOrder
    scope?: SortOrder
    class_id?: SortOrderInput | SortOrder
    created_by?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type AnnouncementWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AnnouncementWhereInput | AnnouncementWhereInput[]
    OR?: AnnouncementWhereInput[]
    NOT?: AnnouncementWhereInput | AnnouncementWhereInput[]
    scope?: StringFilter<"Announcement"> | string
    class_id?: IntNullableFilter<"Announcement"> | number | null
    created_by?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
    class?: XOR<ClassNullableRelationFilter, ClassWhereInput> | null
    creator?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AnnouncementOrderByWithAggregationInput = {
    id?: SortOrder
    scope?: SortOrder
    class_id?: SortOrderInput | SortOrder
    created_by?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: AnnouncementCountOrderByAggregateInput
    _avg?: AnnouncementAvgOrderByAggregateInput
    _max?: AnnouncementMaxOrderByAggregateInput
    _min?: AnnouncementMinOrderByAggregateInput
    _sum?: AnnouncementSumOrderByAggregateInput
  }

  export type AnnouncementScalarWhereWithAggregatesInput = {
    AND?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    OR?: AnnouncementScalarWhereWithAggregatesInput[]
    NOT?: AnnouncementScalarWhereWithAggregatesInput | AnnouncementScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Announcement"> | number
    scope?: StringWithAggregatesFilter<"Announcement"> | string
    class_id?: IntNullableWithAggregatesFilter<"Announcement"> | number | null
    created_by?: IntWithAggregatesFilter<"Announcement"> | number
    title?: StringWithAggregatesFilter<"Announcement"> | string
    content?: StringWithAggregatesFilter<"Announcement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Announcement"> | Date | string
  }

  export type SubmissionWhereInput = {
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    id?: IntFilter<"Submission"> | number
    assignment_id?: IntFilter<"Submission"> | number
    student_id?: IntFilter<"Submission"> | number
    file_url?: StringFilter<"Submission"> | string
    submitted_at?: DateTimeFilter<"Submission"> | Date | string
    status?: StringFilter<"Submission"> | string
    assignment?: XOR<AssignmentRelationFilter, AssignmentWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SubmissionOrderByWithRelationInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    file_url?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    student?: UserOrderByWithRelationInput
  }

  export type SubmissionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    assignment_id_student_id?: SubmissionAssignment_idStudent_idCompoundUniqueInput
    AND?: SubmissionWhereInput | SubmissionWhereInput[]
    OR?: SubmissionWhereInput[]
    NOT?: SubmissionWhereInput | SubmissionWhereInput[]
    assignment_id?: IntFilter<"Submission"> | number
    student_id?: IntFilter<"Submission"> | number
    file_url?: StringFilter<"Submission"> | string
    submitted_at?: DateTimeFilter<"Submission"> | Date | string
    status?: StringFilter<"Submission"> | string
    assignment?: XOR<AssignmentRelationFilter, AssignmentWhereInput>
    student?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "assignment_id_student_id">

  export type SubmissionOrderByWithAggregationInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    file_url?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
    _count?: SubmissionCountOrderByAggregateInput
    _avg?: SubmissionAvgOrderByAggregateInput
    _max?: SubmissionMaxOrderByAggregateInput
    _min?: SubmissionMinOrderByAggregateInput
    _sum?: SubmissionSumOrderByAggregateInput
  }

  export type SubmissionScalarWhereWithAggregatesInput = {
    AND?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    OR?: SubmissionScalarWhereWithAggregatesInput[]
    NOT?: SubmissionScalarWhereWithAggregatesInput | SubmissionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Submission"> | number
    assignment_id?: IntWithAggregatesFilter<"Submission"> | number
    student_id?: IntWithAggregatesFilter<"Submission"> | number
    file_url?: StringWithAggregatesFilter<"Submission"> | string
    submitted_at?: DateTimeWithAggregatesFilter<"Submission"> | Date | string
    status?: StringWithAggregatesFilter<"Submission"> | string
  }

  export type PerangkatPembelajaranWhereInput = {
    AND?: PerangkatPembelajaranWhereInput | PerangkatPembelajaranWhereInput[]
    OR?: PerangkatPembelajaranWhereInput[]
    NOT?: PerangkatPembelajaranWhereInput | PerangkatPembelajaranWhereInput[]
    id?: IntFilter<"PerangkatPembelajaran"> | number
    class_id?: IntFilter<"PerangkatPembelajaran"> | number
    subject_id?: IntFilter<"PerangkatPembelajaran"> | number
    teacher_id?: IntFilter<"PerangkatPembelajaran"> | number
    title?: StringFilter<"PerangkatPembelajaran"> | string
    description?: StringNullableFilter<"PerangkatPembelajaran"> | string | null
    file_url?: StringNullableFilter<"PerangkatPembelajaran"> | string | null
    type?: StringFilter<"PerangkatPembelajaran"> | string
    createdAt?: DateTimeFilter<"PerangkatPembelajaran"> | Date | string
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PerangkatPembelajaranOrderByWithRelationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    class?: ClassOrderByWithRelationInput
    subject?: SubjectOrderByWithRelationInput
    teacher?: UserOrderByWithRelationInput
  }

  export type PerangkatPembelajaranWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PerangkatPembelajaranWhereInput | PerangkatPembelajaranWhereInput[]
    OR?: PerangkatPembelajaranWhereInput[]
    NOT?: PerangkatPembelajaranWhereInput | PerangkatPembelajaranWhereInput[]
    class_id?: IntFilter<"PerangkatPembelajaran"> | number
    subject_id?: IntFilter<"PerangkatPembelajaran"> | number
    teacher_id?: IntFilter<"PerangkatPembelajaran"> | number
    title?: StringFilter<"PerangkatPembelajaran"> | string
    description?: StringNullableFilter<"PerangkatPembelajaran"> | string | null
    file_url?: StringNullableFilter<"PerangkatPembelajaran"> | string | null
    type?: StringFilter<"PerangkatPembelajaran"> | string
    createdAt?: DateTimeFilter<"PerangkatPembelajaran"> | Date | string
    class?: XOR<ClassRelationFilter, ClassWhereInput>
    subject?: XOR<SubjectRelationFilter, SubjectWhereInput>
    teacher?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type PerangkatPembelajaranOrderByWithAggregationInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    _count?: PerangkatPembelajaranCountOrderByAggregateInput
    _avg?: PerangkatPembelajaranAvgOrderByAggregateInput
    _max?: PerangkatPembelajaranMaxOrderByAggregateInput
    _min?: PerangkatPembelajaranMinOrderByAggregateInput
    _sum?: PerangkatPembelajaranSumOrderByAggregateInput
  }

  export type PerangkatPembelajaranScalarWhereWithAggregatesInput = {
    AND?: PerangkatPembelajaranScalarWhereWithAggregatesInput | PerangkatPembelajaranScalarWhereWithAggregatesInput[]
    OR?: PerangkatPembelajaranScalarWhereWithAggregatesInput[]
    NOT?: PerangkatPembelajaranScalarWhereWithAggregatesInput | PerangkatPembelajaranScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PerangkatPembelajaran"> | number
    class_id?: IntWithAggregatesFilter<"PerangkatPembelajaran"> | number
    subject_id?: IntWithAggregatesFilter<"PerangkatPembelajaran"> | number
    teacher_id?: IntWithAggregatesFilter<"PerangkatPembelajaran"> | number
    title?: StringWithAggregatesFilter<"PerangkatPembelajaran"> | string
    description?: StringNullableWithAggregatesFilter<"PerangkatPembelajaran"> | string | null
    file_url?: StringNullableWithAggregatesFilter<"PerangkatPembelajaran"> | string | null
    type?: StringWithAggregatesFilter<"PerangkatPembelajaran"> | string
    createdAt?: DateTimeWithAggregatesFilter<"PerangkatPembelajaran"> | Date | string
  }

  export type UserCreateInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserUpdateInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RoleCreateInput = {
    name: string
    description?: string | null
    users?: UserRoleCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    users?: UserRoleUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserRoleUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserRoleCreateInput = {
    user: UserCreateNestedOneWithoutRolesInput
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateInput = {
    user_id: number
    role_id: number
  }

  export type UserRoleUpdateInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleCreateManyInput = {
    user_id: number
    role_id: number
  }

  export type UserRoleUpdateManyMutationInput = {

  }

  export type UserRoleUncheckedUpdateManyInput = {
    user_id?: IntFieldUpdateOperationsInput | number
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type SubjectCreateInput = {
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutSubjectInput
    materials?: MaterialCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateInput = {
    id?: number
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutSubjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUpdateInput = {
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutSubjectNestedInput
    materials?: MaterialUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutSubjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectCreateManyInput = {
    id?: number
    subject_name: string
    code?: string | null
  }

  export type SubjectUpdateManyMutationInput = {
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubjectUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassCreateInput = {
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    materials?: MaterialCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    announcements?: AnnouncementCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    materials?: MaterialUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassUpdateInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    materials?: MaterialUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateManyInput = {
    id?: number
    class_name: string
    grade_level?: string | null
  }

  export type ClassUpdateManyMutationInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ClassUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherAssignCreateInput = {
    teacher: UserCreateNestedOneWithoutTeacherAssignInput
    class: ClassCreateNestedOneWithoutTeacherAssignInput
    subject: SubjectCreateNestedOneWithoutTeacherAssignInput
  }

  export type TeacherAssignUncheckedCreateInput = {
    id?: number
    teacher_id: number
    class_id: number
    subject_id: number
  }

  export type TeacherAssignUpdateInput = {
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignNestedInput
    class?: ClassUpdateOneRequiredWithoutTeacherAssignNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherAssignNestedInput
  }

  export type TeacherAssignUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAssignCreateManyInput = {
    id?: number
    teacher_id: number
    class_id: number
    subject_id: number
  }

  export type TeacherAssignUpdateManyMutationInput = {

  }

  export type TeacherAssignUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateInput = {
    student: UserCreateNestedOneWithoutEnrollmentsInput
    class: ClassCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateInput = {
    id?: number
    student_id: number
    class_id: number
  }

  export type EnrollmentUpdateInput = {
    student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
    class?: ClassUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentCreateManyInput = {
    id?: number
    student_id: number
    class_id: number
  }

  export type EnrollmentUpdateManyMutationInput = {

  }

  export type EnrollmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialCreateInput = {
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutMaterialsInput
    subject: SubjectCreateNestedOneWithoutMaterialsInput
    teacher: UserCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type MaterialUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutMaterialsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutMaterialsNestedInput
    teacher?: UserUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialCreateManyInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type MaterialUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentCreateInput = {
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    subject: SubjectCreateNestedOneWithoutAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateInput = {
    scope: string
    title: string
    content: string
    createdAt?: Date | string
    class?: ClassCreateNestedOneWithoutAnnouncementsInput
    creator: UserCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateInput = {
    id?: number
    scope: string
    class_id?: number | null
    created_by: number
    title: string
    content: string
    createdAt?: Date | string
  }

  export type AnnouncementUpdateInput = {
    scope?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutAnnouncementsNestedInput
    creator?: UserUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    class_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementCreateManyInput = {
    id?: number
    scope: string
    class_id?: number | null
    created_by: number
    title: string
    content: string
    createdAt?: Date | string
  }

  export type AnnouncementUpdateManyMutationInput = {
    scope?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    class_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_by?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateInput = {
    file_url: string
    submitted_at?: Date | string
    status?: string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
    student: UserCreateNestedOneWithoutStudent_submissionsInput
  }

  export type SubmissionUncheckedCreateInput = {
    id?: number
    assignment_id: number
    student_id: number
    file_url: string
    submitted_at?: Date | string
    status?: string
  }

  export type SubmissionUpdateInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
    student?: UserUpdateOneRequiredWithoutStudent_submissionsNestedInput
  }

  export type SubmissionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignment_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionCreateManyInput = {
    id?: number
    assignment_id: number
    student_id: number
    file_url: string
    submitted_at?: Date | string
    status?: string
  }

  export type SubmissionUpdateManyMutationInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignment_id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type PerangkatPembelajaranCreateInput = {
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutPerangkat_pembelajaranInput
    subject: SubjectCreateNestedOneWithoutPerangkat_pembelajaranInput
    teacher: UserCreateNestedOneWithoutPerangkat_pembelajaranInput
  }

  export type PerangkatPembelajaranUncheckedCreateInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
    subject?: SubjectUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
    teacher?: UserUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
  }

  export type PerangkatPembelajaranUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranCreateManyInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserRoleListRelationFilter = {
    every?: UserRoleWhereInput
    some?: UserRoleWhereInput
    none?: UserRoleWhereInput
  }

  export type TeacherAssignListRelationFilter = {
    every?: TeacherAssignWhereInput
    some?: TeacherAssignWhereInput
    none?: TeacherAssignWhereInput
  }

  export type MaterialListRelationFilter = {
    every?: MaterialWhereInput
    some?: MaterialWhereInput
    none?: MaterialWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type AnnouncementListRelationFilter = {
    every?: AnnouncementWhereInput
    some?: AnnouncementWhereInput
    none?: AnnouncementWhereInput
  }

  export type EnrollmentListRelationFilter = {
    every?: EnrollmentWhereInput
    some?: EnrollmentWhereInput
    none?: EnrollmentWhereInput
  }

  export type PerangkatPembelajaranListRelationFilter = {
    every?: PerangkatPembelajaranWhereInput
    some?: PerangkatPembelajaranWhereInput
    none?: PerangkatPembelajaranWhereInput
  }

  export type SubmissionListRelationFilter = {
    every?: SubmissionWhereInput
    some?: SubmissionWhereInput
    none?: SubmissionWhereInput
  }

  export type UserRoleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TeacherAssignOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MaterialOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AnnouncementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EnrollmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PerangkatPembelajaranOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubmissionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type RoleSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type RoleRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type UserRoleUser_idRole_idCompoundUniqueInput = {
    user_id: number
    role_id: number
  }

  export type UserRoleCountOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleAvgOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleMaxOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleMinOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type UserRoleSumOrderByAggregateInput = {
    user_id?: SortOrder
    role_id?: SortOrder
  }

  export type SubjectCountOrderByAggregateInput = {
    id?: SortOrder
    subject_name?: SortOrder
    code?: SortOrder
  }

  export type SubjectAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SubjectMaxOrderByAggregateInput = {
    id?: SortOrder
    subject_name?: SortOrder
    code?: SortOrder
  }

  export type SubjectMinOrderByAggregateInput = {
    id?: SortOrder
    subject_name?: SortOrder
    code?: SortOrder
  }

  export type SubjectSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassCountOrderByAggregateInput = {
    id?: SortOrder
    class_name?: SortOrder
    grade_level?: SortOrder
  }

  export type ClassAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassMaxOrderByAggregateInput = {
    id?: SortOrder
    class_name?: SortOrder
    grade_level?: SortOrder
  }

  export type ClassMinOrderByAggregateInput = {
    id?: SortOrder
    class_name?: SortOrder
    grade_level?: SortOrder
  }

  export type ClassSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClassRelationFilter = {
    is?: ClassWhereInput
    isNot?: ClassWhereInput
  }

  export type SubjectRelationFilter = {
    is?: SubjectWhereInput
    isNot?: SubjectWhereInput
  }

  export type TeacherAssignCountOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherAssignAvgOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherAssignMaxOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherAssignMinOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type TeacherAssignSumOrderByAggregateInput = {
    id?: SortOrder
    teacher_id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
  }

  export type EnrollmentCountOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
  }

  export type EnrollmentAvgOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
  }

  export type EnrollmentMaxOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
  }

  export type EnrollmentMinOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
  }

  export type EnrollmentSumOrderByAggregateInput = {
    id?: SortOrder
    student_id?: SortOrder
    class_id?: SortOrder
  }

  export type MaterialCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialAvgOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type MaterialMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    createdAt?: SortOrder
  }

  export type MaterialSumOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    attachment_url?: SortOrder
    due_at?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    attachment_url?: SortOrder
    due_at?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    attachment_url?: SortOrder
    due_at?: SortOrder
    createdAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ClassNullableRelationFilter = {
    is?: ClassWhereInput | null
    isNot?: ClassWhereInput | null
  }

  export type AnnouncementCountOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    class_id?: SortOrder
    created_by?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementAvgOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    created_by?: SortOrder
  }

  export type AnnouncementMaxOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    class_id?: SortOrder
    created_by?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementMinOrderByAggregateInput = {
    id?: SortOrder
    scope?: SortOrder
    class_id?: SortOrder
    created_by?: SortOrder
    title?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type AnnouncementSumOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    created_by?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type AssignmentRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type SubmissionAssignment_idStudent_idCompoundUniqueInput = {
    assignment_id: number
    student_id: number
  }

  export type SubmissionCountOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    file_url?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
  }

  export type SubmissionAvgOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
  }

  export type SubmissionMaxOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    file_url?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
  }

  export type SubmissionMinOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
    file_url?: SortOrder
    submitted_at?: SortOrder
    status?: SortOrder
  }

  export type SubmissionSumOrderByAggregateInput = {
    id?: SortOrder
    assignment_id?: SortOrder
    student_id?: SortOrder
  }

  export type PerangkatPembelajaranCountOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type PerangkatPembelajaranAvgOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type PerangkatPembelajaranMaxOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type PerangkatPembelajaranMinOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
    title?: SortOrder
    description?: SortOrder
    file_url?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
  }

  export type PerangkatPembelajaranSumOrderByAggregateInput = {
    id?: SortOrder
    class_id?: SortOrder
    subject_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type UserRoleCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type TeacherAssignCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherAssignCreateWithoutTeacherInput, TeacherAssignUncheckedCreateWithoutTeacherInput> | TeacherAssignCreateWithoutTeacherInput[] | TeacherAssignUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutTeacherInput | TeacherAssignCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherAssignCreateManyTeacherInputEnvelope
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
  }

  export type MaterialCreateNestedManyWithoutTeacherInput = {
    create?: XOR<MaterialCreateWithoutTeacherInput, MaterialUncheckedCreateWithoutTeacherInput> | MaterialCreateWithoutTeacherInput[] | MaterialUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutTeacherInput | MaterialCreateOrConnectWithoutTeacherInput[]
    createMany?: MaterialCreateManyTeacherInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AnnouncementCreateWithoutCreatorInput, AnnouncementUncheckedCreateWithoutCreatorInput> | AnnouncementCreateWithoutCreatorInput[] | AnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatorInput | AnnouncementCreateOrConnectWithoutCreatorInput[]
    createMany?: AnnouncementCreateManyCreatorInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type PerangkatPembelajaranCreateNestedManyWithoutTeacherInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutTeacherInput, PerangkatPembelajaranUncheckedCreateWithoutTeacherInput> | PerangkatPembelajaranCreateWithoutTeacherInput[] | PerangkatPembelajaranUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutTeacherInput | PerangkatPembelajaranCreateOrConnectWithoutTeacherInput[]
    createMany?: PerangkatPembelajaranCreateManyTeacherInputEnvelope
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
  }

  export type SubmissionCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<TeacherAssignCreateWithoutTeacherInput, TeacherAssignUncheckedCreateWithoutTeacherInput> | TeacherAssignCreateWithoutTeacherInput[] | TeacherAssignUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutTeacherInput | TeacherAssignCreateOrConnectWithoutTeacherInput[]
    createMany?: TeacherAssignCreateManyTeacherInputEnvelope
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<MaterialCreateWithoutTeacherInput, MaterialUncheckedCreateWithoutTeacherInput> | MaterialCreateWithoutTeacherInput[] | MaterialUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutTeacherInput | MaterialCreateOrConnectWithoutTeacherInput[]
    createMany?: MaterialCreateManyTeacherInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<AnnouncementCreateWithoutCreatorInput, AnnouncementUncheckedCreateWithoutCreatorInput> | AnnouncementCreateWithoutCreatorInput[] | AnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatorInput | AnnouncementCreateOrConnectWithoutCreatorInput[]
    createMany?: AnnouncementCreateManyCreatorInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutTeacherInput, PerangkatPembelajaranUncheckedCreateWithoutTeacherInput> | PerangkatPembelajaranCreateWithoutTeacherInput[] | PerangkatPembelajaranUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutTeacherInput | PerangkatPembelajaranCreateOrConnectWithoutTeacherInput[]
    createMany?: PerangkatPembelajaranCreateManyTeacherInputEnvelope
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserRoleUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type TeacherAssignUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherAssignCreateWithoutTeacherInput, TeacherAssignUncheckedCreateWithoutTeacherInput> | TeacherAssignCreateWithoutTeacherInput[] | TeacherAssignUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutTeacherInput | TeacherAssignCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherAssignUpsertWithWhereUniqueWithoutTeacherInput | TeacherAssignUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherAssignCreateManyTeacherInputEnvelope
    set?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    disconnect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    delete?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    update?: TeacherAssignUpdateWithWhereUniqueWithoutTeacherInput | TeacherAssignUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherAssignUpdateManyWithWhereWithoutTeacherInput | TeacherAssignUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
  }

  export type MaterialUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<MaterialCreateWithoutTeacherInput, MaterialUncheckedCreateWithoutTeacherInput> | MaterialCreateWithoutTeacherInput[] | MaterialUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutTeacherInput | MaterialCreateOrConnectWithoutTeacherInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutTeacherInput | MaterialUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: MaterialCreateManyTeacherInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutTeacherInput | MaterialUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutTeacherInput | MaterialUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTeacherInput | AssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTeacherInput | AssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTeacherInput | AssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCreatorInput, AnnouncementUncheckedCreateWithoutCreatorInput> | AnnouncementCreateWithoutCreatorInput[] | AnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatorInput | AnnouncementCreateOrConnectWithoutCreatorInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCreatorInput | AnnouncementUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AnnouncementCreateManyCreatorInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCreatorInput | AnnouncementUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCreatorInput | AnnouncementUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutTeacherInput, PerangkatPembelajaranUncheckedCreateWithoutTeacherInput> | PerangkatPembelajaranCreateWithoutTeacherInput[] | PerangkatPembelajaranUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutTeacherInput | PerangkatPembelajaranCreateOrConnectWithoutTeacherInput[]
    upsert?: PerangkatPembelajaranUpsertWithWhereUniqueWithoutTeacherInput | PerangkatPembelajaranUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: PerangkatPembelajaranCreateManyTeacherInputEnvelope
    set?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    disconnect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    delete?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    update?: PerangkatPembelajaranUpdateWithWhereUniqueWithoutTeacherInput | PerangkatPembelajaranUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: PerangkatPembelajaranUpdateManyWithWhereWithoutTeacherInput | PerangkatPembelajaranUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
  }

  export type SubmissionUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput> | UserRoleCreateWithoutUserInput[] | UserRoleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutUserInput | UserRoleCreateOrConnectWithoutUserInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutUserInput | UserRoleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserRoleCreateManyUserInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutUserInput | UserRoleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutUserInput | UserRoleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<TeacherAssignCreateWithoutTeacherInput, TeacherAssignUncheckedCreateWithoutTeacherInput> | TeacherAssignCreateWithoutTeacherInput[] | TeacherAssignUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutTeacherInput | TeacherAssignCreateOrConnectWithoutTeacherInput[]
    upsert?: TeacherAssignUpsertWithWhereUniqueWithoutTeacherInput | TeacherAssignUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: TeacherAssignCreateManyTeacherInputEnvelope
    set?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    disconnect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    delete?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    update?: TeacherAssignUpdateWithWhereUniqueWithoutTeacherInput | TeacherAssignUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: TeacherAssignUpdateManyWithWhereWithoutTeacherInput | TeacherAssignUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<MaterialCreateWithoutTeacherInput, MaterialUncheckedCreateWithoutTeacherInput> | MaterialCreateWithoutTeacherInput[] | MaterialUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutTeacherInput | MaterialCreateOrConnectWithoutTeacherInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutTeacherInput | MaterialUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: MaterialCreateManyTeacherInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutTeacherInput | MaterialUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutTeacherInput | MaterialUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput> | AssignmentCreateWithoutTeacherInput[] | AssignmentUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutTeacherInput | AssignmentCreateOrConnectWithoutTeacherInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutTeacherInput | AssignmentUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: AssignmentCreateManyTeacherInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutTeacherInput | AssignmentUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutTeacherInput | AssignmentUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<AnnouncementCreateWithoutCreatorInput, AnnouncementUncheckedCreateWithoutCreatorInput> | AnnouncementCreateWithoutCreatorInput[] | AnnouncementUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutCreatorInput | AnnouncementCreateOrConnectWithoutCreatorInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutCreatorInput | AnnouncementUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: AnnouncementCreateManyCreatorInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutCreatorInput | AnnouncementUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutCreatorInput | AnnouncementUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput> | EnrollmentCreateWithoutStudentInput[] | EnrollmentUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutStudentInput | EnrollmentCreateOrConnectWithoutStudentInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutStudentInput | EnrollmentUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: EnrollmentCreateManyStudentInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutStudentInput | EnrollmentUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutStudentInput | EnrollmentUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutTeacherInput, PerangkatPembelajaranUncheckedCreateWithoutTeacherInput> | PerangkatPembelajaranCreateWithoutTeacherInput[] | PerangkatPembelajaranUncheckedCreateWithoutTeacherInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutTeacherInput | PerangkatPembelajaranCreateOrConnectWithoutTeacherInput[]
    upsert?: PerangkatPembelajaranUpsertWithWhereUniqueWithoutTeacherInput | PerangkatPembelajaranUpsertWithWhereUniqueWithoutTeacherInput[]
    createMany?: PerangkatPembelajaranCreateManyTeacherInputEnvelope
    set?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    disconnect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    delete?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    update?: PerangkatPembelajaranUpdateWithWhereUniqueWithoutTeacherInput | PerangkatPembelajaranUpdateWithWhereUniqueWithoutTeacherInput[]
    updateMany?: PerangkatPembelajaranUpdateManyWithWhereWithoutTeacherInput | PerangkatPembelajaranUpdateManyWithWhereWithoutTeacherInput[]
    deleteMany?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput> | SubmissionCreateWithoutStudentInput[] | SubmissionUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutStudentInput | SubmissionCreateOrConnectWithoutStudentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutStudentInput | SubmissionUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: SubmissionCreateManyStudentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutStudentInput | SubmissionUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutStudentInput | SubmissionUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type UserRoleCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type UserRoleUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type UserRoleUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput> | UserRoleCreateWithoutRoleInput[] | UserRoleUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserRoleCreateOrConnectWithoutRoleInput | UserRoleCreateOrConnectWithoutRoleInput[]
    upsert?: UserRoleUpsertWithWhereUniqueWithoutRoleInput | UserRoleUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserRoleCreateManyRoleInputEnvelope
    set?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    disconnect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    delete?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    connect?: UserRoleWhereUniqueInput | UserRoleWhereUniqueInput[]
    update?: UserRoleUpdateWithWhereUniqueWithoutRoleInput | UserRoleUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserRoleUpdateManyWithWhereWithoutRoleInput | UserRoleUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRolesInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRolesNestedInput = {
    create?: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRolesInput
    upsert?: UserUpsertWithoutRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRolesInput, UserUpdateWithoutRolesInput>, UserUncheckedUpdateWithoutRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type TeacherAssignCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherAssignCreateWithoutSubjectInput, TeacherAssignUncheckedCreateWithoutSubjectInput> | TeacherAssignCreateWithoutSubjectInput[] | TeacherAssignUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutSubjectInput | TeacherAssignCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherAssignCreateManySubjectInputEnvelope
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
  }

  export type MaterialCreateNestedManyWithoutSubjectInput = {
    create?: XOR<MaterialCreateWithoutSubjectInput, MaterialUncheckedCreateWithoutSubjectInput> | MaterialCreateWithoutSubjectInput[] | MaterialUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSubjectInput | MaterialCreateOrConnectWithoutSubjectInput[]
    createMany?: MaterialCreateManySubjectInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type PerangkatPembelajaranCreateNestedManyWithoutSubjectInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutSubjectInput, PerangkatPembelajaranUncheckedCreateWithoutSubjectInput> | PerangkatPembelajaranCreateWithoutSubjectInput[] | PerangkatPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutSubjectInput | PerangkatPembelajaranCreateOrConnectWithoutSubjectInput[]
    createMany?: PerangkatPembelajaranCreateManySubjectInputEnvelope
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
  }

  export type TeacherAssignUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<TeacherAssignCreateWithoutSubjectInput, TeacherAssignUncheckedCreateWithoutSubjectInput> | TeacherAssignCreateWithoutSubjectInput[] | TeacherAssignUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutSubjectInput | TeacherAssignCreateOrConnectWithoutSubjectInput[]
    createMany?: TeacherAssignCreateManySubjectInputEnvelope
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<MaterialCreateWithoutSubjectInput, MaterialUncheckedCreateWithoutSubjectInput> | MaterialCreateWithoutSubjectInput[] | MaterialUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSubjectInput | MaterialCreateOrConnectWithoutSubjectInput[]
    createMany?: MaterialCreateManySubjectInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type PerangkatPembelajaranUncheckedCreateNestedManyWithoutSubjectInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutSubjectInput, PerangkatPembelajaranUncheckedCreateWithoutSubjectInput> | PerangkatPembelajaranCreateWithoutSubjectInput[] | PerangkatPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutSubjectInput | PerangkatPembelajaranCreateOrConnectWithoutSubjectInput[]
    createMany?: PerangkatPembelajaranCreateManySubjectInputEnvelope
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
  }

  export type TeacherAssignUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherAssignCreateWithoutSubjectInput, TeacherAssignUncheckedCreateWithoutSubjectInput> | TeacherAssignCreateWithoutSubjectInput[] | TeacherAssignUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutSubjectInput | TeacherAssignCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherAssignUpsertWithWhereUniqueWithoutSubjectInput | TeacherAssignUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherAssignCreateManySubjectInputEnvelope
    set?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    disconnect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    delete?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    update?: TeacherAssignUpdateWithWhereUniqueWithoutSubjectInput | TeacherAssignUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherAssignUpdateManyWithWhereWithoutSubjectInput | TeacherAssignUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
  }

  export type MaterialUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<MaterialCreateWithoutSubjectInput, MaterialUncheckedCreateWithoutSubjectInput> | MaterialCreateWithoutSubjectInput[] | MaterialUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSubjectInput | MaterialCreateOrConnectWithoutSubjectInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutSubjectInput | MaterialUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: MaterialCreateManySubjectInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutSubjectInput | MaterialUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutSubjectInput | MaterialUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutSubjectInput | AssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutSubjectInput | AssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutSubjectInput | AssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type PerangkatPembelajaranUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutSubjectInput, PerangkatPembelajaranUncheckedCreateWithoutSubjectInput> | PerangkatPembelajaranCreateWithoutSubjectInput[] | PerangkatPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutSubjectInput | PerangkatPembelajaranCreateOrConnectWithoutSubjectInput[]
    upsert?: PerangkatPembelajaranUpsertWithWhereUniqueWithoutSubjectInput | PerangkatPembelajaranUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: PerangkatPembelajaranCreateManySubjectInputEnvelope
    set?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    disconnect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    delete?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    update?: PerangkatPembelajaranUpdateWithWhereUniqueWithoutSubjectInput | PerangkatPembelajaranUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: PerangkatPembelajaranUpdateManyWithWhereWithoutSubjectInput | PerangkatPembelajaranUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
  }

  export type TeacherAssignUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<TeacherAssignCreateWithoutSubjectInput, TeacherAssignUncheckedCreateWithoutSubjectInput> | TeacherAssignCreateWithoutSubjectInput[] | TeacherAssignUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutSubjectInput | TeacherAssignCreateOrConnectWithoutSubjectInput[]
    upsert?: TeacherAssignUpsertWithWhereUniqueWithoutSubjectInput | TeacherAssignUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: TeacherAssignCreateManySubjectInputEnvelope
    set?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    disconnect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    delete?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    update?: TeacherAssignUpdateWithWhereUniqueWithoutSubjectInput | TeacherAssignUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: TeacherAssignUpdateManyWithWhereWithoutSubjectInput | TeacherAssignUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<MaterialCreateWithoutSubjectInput, MaterialUncheckedCreateWithoutSubjectInput> | MaterialCreateWithoutSubjectInput[] | MaterialUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutSubjectInput | MaterialCreateOrConnectWithoutSubjectInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutSubjectInput | MaterialUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: MaterialCreateManySubjectInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutSubjectInput | MaterialUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutSubjectInput | MaterialUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput> | AssignmentCreateWithoutSubjectInput[] | AssignmentUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubjectInput | AssignmentCreateOrConnectWithoutSubjectInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutSubjectInput | AssignmentUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: AssignmentCreateManySubjectInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutSubjectInput | AssignmentUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutSubjectInput | AssignmentUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutSubjectInput, PerangkatPembelajaranUncheckedCreateWithoutSubjectInput> | PerangkatPembelajaranCreateWithoutSubjectInput[] | PerangkatPembelajaranUncheckedCreateWithoutSubjectInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutSubjectInput | PerangkatPembelajaranCreateOrConnectWithoutSubjectInput[]
    upsert?: PerangkatPembelajaranUpsertWithWhereUniqueWithoutSubjectInput | PerangkatPembelajaranUpsertWithWhereUniqueWithoutSubjectInput[]
    createMany?: PerangkatPembelajaranCreateManySubjectInputEnvelope
    set?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    disconnect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    delete?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    update?: PerangkatPembelajaranUpdateWithWhereUniqueWithoutSubjectInput | PerangkatPembelajaranUpdateWithWhereUniqueWithoutSubjectInput[]
    updateMany?: PerangkatPembelajaranUpdateManyWithWhereWithoutSubjectInput | PerangkatPembelajaranUpdateManyWithWhereWithoutSubjectInput[]
    deleteMany?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
  }

  export type TeacherAssignCreateNestedManyWithoutClassInput = {
    create?: XOR<TeacherAssignCreateWithoutClassInput, TeacherAssignUncheckedCreateWithoutClassInput> | TeacherAssignCreateWithoutClassInput[] | TeacherAssignUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutClassInput | TeacherAssignCreateOrConnectWithoutClassInput[]
    createMany?: TeacherAssignCreateManyClassInputEnvelope
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
  }

  export type EnrollmentCreateNestedManyWithoutClassInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type MaterialCreateNestedManyWithoutClassInput = {
    create?: XOR<MaterialCreateWithoutClassInput, MaterialUncheckedCreateWithoutClassInput> | MaterialCreateWithoutClassInput[] | MaterialUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutClassInput | MaterialCreateOrConnectWithoutClassInput[]
    createMany?: MaterialCreateManyClassInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutClassInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AnnouncementCreateNestedManyWithoutClassInput = {
    create?: XOR<AnnouncementCreateWithoutClassInput, AnnouncementUncheckedCreateWithoutClassInput> | AnnouncementCreateWithoutClassInput[] | AnnouncementUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutClassInput | AnnouncementCreateOrConnectWithoutClassInput[]
    createMany?: AnnouncementCreateManyClassInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type PerangkatPembelajaranCreateNestedManyWithoutClassInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutClassInput, PerangkatPembelajaranUncheckedCreateWithoutClassInput> | PerangkatPembelajaranCreateWithoutClassInput[] | PerangkatPembelajaranUncheckedCreateWithoutClassInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutClassInput | PerangkatPembelajaranCreateOrConnectWithoutClassInput[]
    createMany?: PerangkatPembelajaranCreateManyClassInputEnvelope
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
  }

  export type TeacherAssignUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<TeacherAssignCreateWithoutClassInput, TeacherAssignUncheckedCreateWithoutClassInput> | TeacherAssignCreateWithoutClassInput[] | TeacherAssignUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutClassInput | TeacherAssignCreateOrConnectWithoutClassInput[]
    createMany?: TeacherAssignCreateManyClassInputEnvelope
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
  }

  export type EnrollmentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
  }

  export type MaterialUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<MaterialCreateWithoutClassInput, MaterialUncheckedCreateWithoutClassInput> | MaterialCreateWithoutClassInput[] | MaterialUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutClassInput | MaterialCreateOrConnectWithoutClassInput[]
    createMany?: MaterialCreateManyClassInputEnvelope
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type AnnouncementUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<AnnouncementCreateWithoutClassInput, AnnouncementUncheckedCreateWithoutClassInput> | AnnouncementCreateWithoutClassInput[] | AnnouncementUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutClassInput | AnnouncementCreateOrConnectWithoutClassInput[]
    createMany?: AnnouncementCreateManyClassInputEnvelope
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
  }

  export type PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutClassInput, PerangkatPembelajaranUncheckedCreateWithoutClassInput> | PerangkatPembelajaranCreateWithoutClassInput[] | PerangkatPembelajaranUncheckedCreateWithoutClassInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutClassInput | PerangkatPembelajaranCreateOrConnectWithoutClassInput[]
    createMany?: PerangkatPembelajaranCreateManyClassInputEnvelope
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
  }

  export type TeacherAssignUpdateManyWithoutClassNestedInput = {
    create?: XOR<TeacherAssignCreateWithoutClassInput, TeacherAssignUncheckedCreateWithoutClassInput> | TeacherAssignCreateWithoutClassInput[] | TeacherAssignUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutClassInput | TeacherAssignCreateOrConnectWithoutClassInput[]
    upsert?: TeacherAssignUpsertWithWhereUniqueWithoutClassInput | TeacherAssignUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: TeacherAssignCreateManyClassInputEnvelope
    set?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    disconnect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    delete?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    update?: TeacherAssignUpdateWithWhereUniqueWithoutClassInput | TeacherAssignUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: TeacherAssignUpdateManyWithWhereWithoutClassInput | TeacherAssignUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
  }

  export type EnrollmentUpdateManyWithoutClassNestedInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutClassInput | EnrollmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutClassInput | EnrollmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutClassInput | EnrollmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type MaterialUpdateManyWithoutClassNestedInput = {
    create?: XOR<MaterialCreateWithoutClassInput, MaterialUncheckedCreateWithoutClassInput> | MaterialCreateWithoutClassInput[] | MaterialUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutClassInput | MaterialCreateOrConnectWithoutClassInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutClassInput | MaterialUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: MaterialCreateManyClassInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutClassInput | MaterialUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutClassInput | MaterialUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutClassNestedInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClassInput | AssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClassInput | AssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClassInput | AssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AnnouncementUpdateManyWithoutClassNestedInput = {
    create?: XOR<AnnouncementCreateWithoutClassInput, AnnouncementUncheckedCreateWithoutClassInput> | AnnouncementCreateWithoutClassInput[] | AnnouncementUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutClassInput | AnnouncementCreateOrConnectWithoutClassInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutClassInput | AnnouncementUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AnnouncementCreateManyClassInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutClassInput | AnnouncementUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutClassInput | AnnouncementUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type PerangkatPembelajaranUpdateManyWithoutClassNestedInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutClassInput, PerangkatPembelajaranUncheckedCreateWithoutClassInput> | PerangkatPembelajaranCreateWithoutClassInput[] | PerangkatPembelajaranUncheckedCreateWithoutClassInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutClassInput | PerangkatPembelajaranCreateOrConnectWithoutClassInput[]
    upsert?: PerangkatPembelajaranUpsertWithWhereUniqueWithoutClassInput | PerangkatPembelajaranUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: PerangkatPembelajaranCreateManyClassInputEnvelope
    set?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    disconnect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    delete?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    update?: PerangkatPembelajaranUpdateWithWhereUniqueWithoutClassInput | PerangkatPembelajaranUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: PerangkatPembelajaranUpdateManyWithWhereWithoutClassInput | PerangkatPembelajaranUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
  }

  export type TeacherAssignUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<TeacherAssignCreateWithoutClassInput, TeacherAssignUncheckedCreateWithoutClassInput> | TeacherAssignCreateWithoutClassInput[] | TeacherAssignUncheckedCreateWithoutClassInput[]
    connectOrCreate?: TeacherAssignCreateOrConnectWithoutClassInput | TeacherAssignCreateOrConnectWithoutClassInput[]
    upsert?: TeacherAssignUpsertWithWhereUniqueWithoutClassInput | TeacherAssignUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: TeacherAssignCreateManyClassInputEnvelope
    set?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    disconnect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    delete?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    connect?: TeacherAssignWhereUniqueInput | TeacherAssignWhereUniqueInput[]
    update?: TeacherAssignUpdateWithWhereUniqueWithoutClassInput | TeacherAssignUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: TeacherAssignUpdateManyWithWhereWithoutClassInput | TeacherAssignUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
  }

  export type EnrollmentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput> | EnrollmentCreateWithoutClassInput[] | EnrollmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: EnrollmentCreateOrConnectWithoutClassInput | EnrollmentCreateOrConnectWithoutClassInput[]
    upsert?: EnrollmentUpsertWithWhereUniqueWithoutClassInput | EnrollmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: EnrollmentCreateManyClassInputEnvelope
    set?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    disconnect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    delete?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    connect?: EnrollmentWhereUniqueInput | EnrollmentWhereUniqueInput[]
    update?: EnrollmentUpdateWithWhereUniqueWithoutClassInput | EnrollmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: EnrollmentUpdateManyWithWhereWithoutClassInput | EnrollmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
  }

  export type MaterialUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<MaterialCreateWithoutClassInput, MaterialUncheckedCreateWithoutClassInput> | MaterialCreateWithoutClassInput[] | MaterialUncheckedCreateWithoutClassInput[]
    connectOrCreate?: MaterialCreateOrConnectWithoutClassInput | MaterialCreateOrConnectWithoutClassInput[]
    upsert?: MaterialUpsertWithWhereUniqueWithoutClassInput | MaterialUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: MaterialCreateManyClassInputEnvelope
    set?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    disconnect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    delete?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    connect?: MaterialWhereUniqueInput | MaterialWhereUniqueInput[]
    update?: MaterialUpdateWithWhereUniqueWithoutClassInput | MaterialUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: MaterialUpdateManyWithWhereWithoutClassInput | MaterialUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput> | AssignmentCreateWithoutClassInput[] | AssignmentUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutClassInput | AssignmentCreateOrConnectWithoutClassInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutClassInput | AssignmentUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AssignmentCreateManyClassInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutClassInput | AssignmentUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutClassInput | AssignmentUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type AnnouncementUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<AnnouncementCreateWithoutClassInput, AnnouncementUncheckedCreateWithoutClassInput> | AnnouncementCreateWithoutClassInput[] | AnnouncementUncheckedCreateWithoutClassInput[]
    connectOrCreate?: AnnouncementCreateOrConnectWithoutClassInput | AnnouncementCreateOrConnectWithoutClassInput[]
    upsert?: AnnouncementUpsertWithWhereUniqueWithoutClassInput | AnnouncementUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: AnnouncementCreateManyClassInputEnvelope
    set?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    disconnect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    delete?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    connect?: AnnouncementWhereUniqueInput | AnnouncementWhereUniqueInput[]
    update?: AnnouncementUpdateWithWhereUniqueWithoutClassInput | AnnouncementUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: AnnouncementUpdateManyWithWhereWithoutClassInput | AnnouncementUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
  }

  export type PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput = {
    create?: XOR<PerangkatPembelajaranCreateWithoutClassInput, PerangkatPembelajaranUncheckedCreateWithoutClassInput> | PerangkatPembelajaranCreateWithoutClassInput[] | PerangkatPembelajaranUncheckedCreateWithoutClassInput[]
    connectOrCreate?: PerangkatPembelajaranCreateOrConnectWithoutClassInput | PerangkatPembelajaranCreateOrConnectWithoutClassInput[]
    upsert?: PerangkatPembelajaranUpsertWithWhereUniqueWithoutClassInput | PerangkatPembelajaranUpsertWithWhereUniqueWithoutClassInput[]
    createMany?: PerangkatPembelajaranCreateManyClassInputEnvelope
    set?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    disconnect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    delete?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    connect?: PerangkatPembelajaranWhereUniqueInput | PerangkatPembelajaranWhereUniqueInput[]
    update?: PerangkatPembelajaranUpdateWithWhereUniqueWithoutClassInput | PerangkatPembelajaranUpdateWithWhereUniqueWithoutClassInput[]
    updateMany?: PerangkatPembelajaranUpdateManyWithWhereWithoutClassInput | PerangkatPembelajaranUpdateManyWithWhereWithoutClassInput[]
    deleteMany?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTeacherAssignInput = {
    create?: XOR<UserCreateWithoutTeacherAssignInput, UserUncheckedCreateWithoutTeacherAssignInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherAssignInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutTeacherAssignInput = {
    create?: XOR<ClassCreateWithoutTeacherAssignInput, ClassUncheckedCreateWithoutTeacherAssignInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherAssignInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutTeacherAssignInput = {
    create?: XOR<SubjectCreateWithoutTeacherAssignInput, SubjectUncheckedCreateWithoutTeacherAssignInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherAssignInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTeacherAssignNestedInput = {
    create?: XOR<UserCreateWithoutTeacherAssignInput, UserUncheckedCreateWithoutTeacherAssignInput>
    connectOrCreate?: UserCreateOrConnectWithoutTeacherAssignInput
    upsert?: UserUpsertWithoutTeacherAssignInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTeacherAssignInput, UserUpdateWithoutTeacherAssignInput>, UserUncheckedUpdateWithoutTeacherAssignInput>
  }

  export type ClassUpdateOneRequiredWithoutTeacherAssignNestedInput = {
    create?: XOR<ClassCreateWithoutTeacherAssignInput, ClassUncheckedCreateWithoutTeacherAssignInput>
    connectOrCreate?: ClassCreateOrConnectWithoutTeacherAssignInput
    upsert?: ClassUpsertWithoutTeacherAssignInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutTeacherAssignInput, ClassUpdateWithoutTeacherAssignInput>, ClassUncheckedUpdateWithoutTeacherAssignInput>
  }

  export type SubjectUpdateOneRequiredWithoutTeacherAssignNestedInput = {
    create?: XOR<SubjectCreateWithoutTeacherAssignInput, SubjectUncheckedCreateWithoutTeacherAssignInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutTeacherAssignInput
    upsert?: SubjectUpsertWithoutTeacherAssignInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutTeacherAssignInput, SubjectUpdateWithoutTeacherAssignInput>, SubjectUncheckedUpdateWithoutTeacherAssignInput>
  }

  export type UserCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassCreateNestedOneWithoutEnrollmentsInput = {
    create?: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutEnrollmentsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutEnrollmentsInput
    upsert?: UserUpsertWithoutEnrollmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutEnrollmentsInput, UserUpdateWithoutEnrollmentsInput>, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassUpdateOneRequiredWithoutEnrollmentsNestedInput = {
    create?: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutEnrollmentsInput
    upsert?: ClassUpsertWithoutEnrollmentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutEnrollmentsInput, ClassUpdateWithoutEnrollmentsInput>, ClassUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<ClassCreateWithoutMaterialsInput, ClassUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMaterialsInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<SubjectCreateWithoutMaterialsInput, SubjectUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutMaterialsInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMaterialsInput = {
    create?: XOR<UserCreateWithoutMaterialsInput, UserUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaterialsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<ClassCreateWithoutMaterialsInput, ClassUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutMaterialsInput
    upsert?: ClassUpsertWithoutMaterialsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutMaterialsInput, ClassUpdateWithoutMaterialsInput>, ClassUncheckedUpdateWithoutMaterialsInput>
  }

  export type SubjectUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<SubjectCreateWithoutMaterialsInput, SubjectUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutMaterialsInput
    upsert?: SubjectUpsertWithoutMaterialsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutMaterialsInput, SubjectUpdateWithoutMaterialsInput>, SubjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type UserUpdateOneRequiredWithoutMaterialsNestedInput = {
    create?: XOR<UserCreateWithoutMaterialsInput, UserUncheckedCreateWithoutMaterialsInput>
    connectOrCreate?: UserCreateOrConnectWithoutMaterialsInput
    upsert?: UserUpsertWithoutMaterialsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMaterialsInput, UserUpdateWithoutMaterialsInput>, UserUncheckedUpdateWithoutMaterialsInput>
  }

  export type ClassCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAssignmentsInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAssignmentsInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
  }

  export type SubmissionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type SubmissionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ClassUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAssignmentsInput
    upsert?: ClassUpsertWithoutAssignmentsInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAssignmentsInput, ClassUpdateWithoutAssignmentsInput>, ClassUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubjectUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutAssignmentsInput
    upsert?: SubjectUpsertWithoutAssignmentsInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutAssignmentsInput, SubjectUpdateWithoutAssignmentsInput>, SubjectUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAssignmentsInput
    upsert?: UserUpsertWithoutAssignmentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAssignmentsInput, UserUpdateWithoutAssignmentsInput>, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubmissionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput> | SubmissionCreateWithoutAssignmentInput[] | SubmissionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SubmissionCreateOrConnectWithoutAssignmentInput | SubmissionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SubmissionUpsertWithWhereUniqueWithoutAssignmentInput | SubmissionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SubmissionCreateManyAssignmentInputEnvelope
    set?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    disconnect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    delete?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    connect?: SubmissionWhereUniqueInput | SubmissionWhereUniqueInput[]
    update?: SubmissionUpdateWithWhereUniqueWithoutAssignmentInput | SubmissionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SubmissionUpdateManyWithWhereWithoutAssignmentInput | SubmissionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
  }

  export type ClassCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<ClassCreateWithoutAnnouncementsInput, ClassUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAnnouncementsInput
    connect?: ClassWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutAnnouncementsInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
  }

  export type ClassUpdateOneWithoutAnnouncementsNestedInput = {
    create?: XOR<ClassCreateWithoutAnnouncementsInput, ClassUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: ClassCreateOrConnectWithoutAnnouncementsInput
    upsert?: ClassUpsertWithoutAnnouncementsInput
    disconnect?: ClassWhereInput | boolean
    delete?: ClassWhereInput | boolean
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutAnnouncementsInput, ClassUpdateWithoutAnnouncementsInput>, ClassUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateOneRequiredWithoutAnnouncementsNestedInput = {
    create?: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAnnouncementsInput
    upsert?: UserUpsertWithoutAnnouncementsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAnnouncementsInput, UserUpdateWithoutAnnouncementsInput>, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AssignmentCreateNestedOneWithoutSubmissionsInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutStudent_submissionsInput = {
    create?: XOR<UserCreateWithoutStudent_submissionsInput, UserUncheckedCreateWithoutStudent_submissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudent_submissionsInput
    connect?: UserWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSubmissionsInput
    upsert?: AssignmentUpsertWithoutSubmissionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSubmissionsInput, AssignmentUpdateWithoutSubmissionsInput>, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type UserUpdateOneRequiredWithoutStudent_submissionsNestedInput = {
    create?: XOR<UserCreateWithoutStudent_submissionsInput, UserUncheckedCreateWithoutStudent_submissionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutStudent_submissionsInput
    upsert?: UserUpsertWithoutStudent_submissionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutStudent_submissionsInput, UserUpdateWithoutStudent_submissionsInput>, UserUncheckedUpdateWithoutStudent_submissionsInput>
  }

  export type ClassCreateNestedOneWithoutPerangkat_pembelajaranInput = {
    create?: XOR<ClassCreateWithoutPerangkat_pembelajaranInput, ClassUncheckedCreateWithoutPerangkat_pembelajaranInput>
    connectOrCreate?: ClassCreateOrConnectWithoutPerangkat_pembelajaranInput
    connect?: ClassWhereUniqueInput
  }

  export type SubjectCreateNestedOneWithoutPerangkat_pembelajaranInput = {
    create?: XOR<SubjectCreateWithoutPerangkat_pembelajaranInput, SubjectUncheckedCreateWithoutPerangkat_pembelajaranInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutPerangkat_pembelajaranInput
    connect?: SubjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPerangkat_pembelajaranInput = {
    create?: XOR<UserCreateWithoutPerangkat_pembelajaranInput, UserUncheckedCreateWithoutPerangkat_pembelajaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerangkat_pembelajaranInput
    connect?: UserWhereUniqueInput
  }

  export type ClassUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput = {
    create?: XOR<ClassCreateWithoutPerangkat_pembelajaranInput, ClassUncheckedCreateWithoutPerangkat_pembelajaranInput>
    connectOrCreate?: ClassCreateOrConnectWithoutPerangkat_pembelajaranInput
    upsert?: ClassUpsertWithoutPerangkat_pembelajaranInput
    connect?: ClassWhereUniqueInput
    update?: XOR<XOR<ClassUpdateToOneWithWhereWithoutPerangkat_pembelajaranInput, ClassUpdateWithoutPerangkat_pembelajaranInput>, ClassUncheckedUpdateWithoutPerangkat_pembelajaranInput>
  }

  export type SubjectUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput = {
    create?: XOR<SubjectCreateWithoutPerangkat_pembelajaranInput, SubjectUncheckedCreateWithoutPerangkat_pembelajaranInput>
    connectOrCreate?: SubjectCreateOrConnectWithoutPerangkat_pembelajaranInput
    upsert?: SubjectUpsertWithoutPerangkat_pembelajaranInput
    connect?: SubjectWhereUniqueInput
    update?: XOR<XOR<SubjectUpdateToOneWithWhereWithoutPerangkat_pembelajaranInput, SubjectUpdateWithoutPerangkat_pembelajaranInput>, SubjectUncheckedUpdateWithoutPerangkat_pembelajaranInput>
  }

  export type UserUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput = {
    create?: XOR<UserCreateWithoutPerangkat_pembelajaranInput, UserUncheckedCreateWithoutPerangkat_pembelajaranInput>
    connectOrCreate?: UserCreateOrConnectWithoutPerangkat_pembelajaranInput
    upsert?: UserUpsertWithoutPerangkat_pembelajaranInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPerangkat_pembelajaranInput, UserUpdateWithoutPerangkat_pembelajaranInput>, UserUncheckedUpdateWithoutPerangkat_pembelajaranInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type UserRoleCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersInput
  }

  export type UserRoleUncheckedCreateWithoutUserInput = {
    role_id: number
  }

  export type UserRoleCreateOrConnectWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleCreateManyUserInputEnvelope = {
    data: UserRoleCreateManyUserInput | UserRoleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type TeacherAssignCreateWithoutTeacherInput = {
    class: ClassCreateNestedOneWithoutTeacherAssignInput
    subject: SubjectCreateNestedOneWithoutTeacherAssignInput
  }

  export type TeacherAssignUncheckedCreateWithoutTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
  }

  export type TeacherAssignCreateOrConnectWithoutTeacherInput = {
    where: TeacherAssignWhereUniqueInput
    create: XOR<TeacherAssignCreateWithoutTeacherInput, TeacherAssignUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherAssignCreateManyTeacherInputEnvelope = {
    data: TeacherAssignCreateManyTeacherInput | TeacherAssignCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type MaterialCreateWithoutTeacherInput = {
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutMaterialsInput
    subject: SubjectCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutTeacherInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutTeacherInput, MaterialUncheckedCreateWithoutTeacherInput>
  }

  export type MaterialCreateManyTeacherInputEnvelope = {
    data: MaterialCreateManyTeacherInput | MaterialCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutTeacherInput = {
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    subject: SubjectCreateNestedOneWithoutAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignmentCreateManyTeacherInputEnvelope = {
    data: AssignmentCreateManyTeacherInput | AssignmentCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutCreatorInput = {
    scope: string
    title: string
    content: string
    createdAt?: Date | string
    class?: ClassCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateWithoutCreatorInput = {
    id?: number
    scope: string
    class_id?: number | null
    title: string
    content: string
    createdAt?: Date | string
  }

  export type AnnouncementCreateOrConnectWithoutCreatorInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutCreatorInput, AnnouncementUncheckedCreateWithoutCreatorInput>
  }

  export type AnnouncementCreateManyCreatorInputEnvelope = {
    data: AnnouncementCreateManyCreatorInput | AnnouncementCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutStudentInput = {
    class: ClassCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutStudentInput = {
    id?: number
    class_id: number
  }

  export type EnrollmentCreateOrConnectWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentCreateManyStudentInputEnvelope = {
    data: EnrollmentCreateManyStudentInput | EnrollmentCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PerangkatPembelajaranCreateWithoutTeacherInput = {
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutPerangkat_pembelajaranInput
    subject: SubjectCreateNestedOneWithoutPerangkat_pembelajaranInput
  }

  export type PerangkatPembelajaranUncheckedCreateWithoutTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranCreateOrConnectWithoutTeacherInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    create: XOR<PerangkatPembelajaranCreateWithoutTeacherInput, PerangkatPembelajaranUncheckedCreateWithoutTeacherInput>
  }

  export type PerangkatPembelajaranCreateManyTeacherInputEnvelope = {
    data: PerangkatPembelajaranCreateManyTeacherInput | PerangkatPembelajaranCreateManyTeacherInput[]
    skipDuplicates?: boolean
  }

  export type SubmissionCreateWithoutStudentInput = {
    file_url: string
    submitted_at?: Date | string
    status?: string
    assignment: AssignmentCreateNestedOneWithoutSubmissionsInput
  }

  export type SubmissionUncheckedCreateWithoutStudentInput = {
    id?: number
    assignment_id: number
    file_url: string
    submitted_at?: Date | string
    status?: string
  }

  export type SubmissionCreateOrConnectWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionCreateManyStudentInputEnvelope = {
    data: SubmissionCreateManyStudentInput | SubmissionCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
    create: XOR<UserRoleCreateWithoutUserInput, UserRoleUncheckedCreateWithoutUserInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutUserInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutUserInput, UserRoleUncheckedUpdateWithoutUserInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutUserInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutUserInput>
  }

  export type UserRoleScalarWhereInput = {
    AND?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    OR?: UserRoleScalarWhereInput[]
    NOT?: UserRoleScalarWhereInput | UserRoleScalarWhereInput[]
    user_id?: IntFilter<"UserRole"> | number
    role_id?: IntFilter<"UserRole"> | number
  }

  export type TeacherAssignUpsertWithWhereUniqueWithoutTeacherInput = {
    where: TeacherAssignWhereUniqueInput
    update: XOR<TeacherAssignUpdateWithoutTeacherInput, TeacherAssignUncheckedUpdateWithoutTeacherInput>
    create: XOR<TeacherAssignCreateWithoutTeacherInput, TeacherAssignUncheckedCreateWithoutTeacherInput>
  }

  export type TeacherAssignUpdateWithWhereUniqueWithoutTeacherInput = {
    where: TeacherAssignWhereUniqueInput
    data: XOR<TeacherAssignUpdateWithoutTeacherInput, TeacherAssignUncheckedUpdateWithoutTeacherInput>
  }

  export type TeacherAssignUpdateManyWithWhereWithoutTeacherInput = {
    where: TeacherAssignScalarWhereInput
    data: XOR<TeacherAssignUpdateManyMutationInput, TeacherAssignUncheckedUpdateManyWithoutTeacherInput>
  }

  export type TeacherAssignScalarWhereInput = {
    AND?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
    OR?: TeacherAssignScalarWhereInput[]
    NOT?: TeacherAssignScalarWhereInput | TeacherAssignScalarWhereInput[]
    id?: IntFilter<"TeacherAssign"> | number
    teacher_id?: IntFilter<"TeacherAssign"> | number
    class_id?: IntFilter<"TeacherAssign"> | number
    subject_id?: IntFilter<"TeacherAssign"> | number
  }

  export type MaterialUpsertWithWhereUniqueWithoutTeacherInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutTeacherInput, MaterialUncheckedUpdateWithoutTeacherInput>
    create: XOR<MaterialCreateWithoutTeacherInput, MaterialUncheckedCreateWithoutTeacherInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutTeacherInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutTeacherInput, MaterialUncheckedUpdateWithoutTeacherInput>
  }

  export type MaterialUpdateManyWithWhereWithoutTeacherInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutTeacherInput>
  }

  export type MaterialScalarWhereInput = {
    AND?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    OR?: MaterialScalarWhereInput[]
    NOT?: MaterialScalarWhereInput | MaterialScalarWhereInput[]
    id?: IntFilter<"Material"> | number
    class_id?: IntFilter<"Material"> | number
    subject_id?: IntFilter<"Material"> | number
    teacher_id?: IntFilter<"Material"> | number
    title?: StringFilter<"Material"> | string
    description?: StringNullableFilter<"Material"> | string | null
    file_url?: StringNullableFilter<"Material"> | string | null
    createdAt?: DateTimeFilter<"Material"> | Date | string
  }

  export type AssignmentUpsertWithWhereUniqueWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutTeacherInput, AssignmentUncheckedUpdateWithoutTeacherInput>
    create: XOR<AssignmentCreateWithoutTeacherInput, AssignmentUncheckedCreateWithoutTeacherInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutTeacherInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutTeacherInput, AssignmentUncheckedUpdateWithoutTeacherInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutTeacherInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutTeacherInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: IntFilter<"Assignment"> | number
    class_id?: IntFilter<"Assignment"> | number
    subject_id?: IntFilter<"Assignment"> | number
    teacher_id?: IntFilter<"Assignment"> | number
    title?: StringFilter<"Assignment"> | string
    description?: StringNullableFilter<"Assignment"> | string | null
    attachment_url?: StringNullableFilter<"Assignment"> | string | null
    due_at?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutCreatorInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutCreatorInput, AnnouncementUncheckedUpdateWithoutCreatorInput>
    create: XOR<AnnouncementCreateWithoutCreatorInput, AnnouncementUncheckedCreateWithoutCreatorInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutCreatorInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutCreatorInput, AnnouncementUncheckedUpdateWithoutCreatorInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutCreatorInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutCreatorInput>
  }

  export type AnnouncementScalarWhereInput = {
    AND?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    OR?: AnnouncementScalarWhereInput[]
    NOT?: AnnouncementScalarWhereInput | AnnouncementScalarWhereInput[]
    id?: IntFilter<"Announcement"> | number
    scope?: StringFilter<"Announcement"> | string
    class_id?: IntNullableFilter<"Announcement"> | number | null
    created_by?: IntFilter<"Announcement"> | number
    title?: StringFilter<"Announcement"> | string
    content?: StringFilter<"Announcement"> | string
    createdAt?: DateTimeFilter<"Announcement"> | Date | string
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
    create: XOR<EnrollmentCreateWithoutStudentInput, EnrollmentUncheckedCreateWithoutStudentInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutStudentInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutStudentInput, EnrollmentUncheckedUpdateWithoutStudentInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutStudentInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutStudentInput>
  }

  export type EnrollmentScalarWhereInput = {
    AND?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    OR?: EnrollmentScalarWhereInput[]
    NOT?: EnrollmentScalarWhereInput | EnrollmentScalarWhereInput[]
    id?: IntFilter<"Enrollment"> | number
    student_id?: IntFilter<"Enrollment"> | number
    class_id?: IntFilter<"Enrollment"> | number
  }

  export type PerangkatPembelajaranUpsertWithWhereUniqueWithoutTeacherInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    update: XOR<PerangkatPembelajaranUpdateWithoutTeacherInput, PerangkatPembelajaranUncheckedUpdateWithoutTeacherInput>
    create: XOR<PerangkatPembelajaranCreateWithoutTeacherInput, PerangkatPembelajaranUncheckedCreateWithoutTeacherInput>
  }

  export type PerangkatPembelajaranUpdateWithWhereUniqueWithoutTeacherInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    data: XOR<PerangkatPembelajaranUpdateWithoutTeacherInput, PerangkatPembelajaranUncheckedUpdateWithoutTeacherInput>
  }

  export type PerangkatPembelajaranUpdateManyWithWhereWithoutTeacherInput = {
    where: PerangkatPembelajaranScalarWhereInput
    data: XOR<PerangkatPembelajaranUpdateManyMutationInput, PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherInput>
  }

  export type PerangkatPembelajaranScalarWhereInput = {
    AND?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
    OR?: PerangkatPembelajaranScalarWhereInput[]
    NOT?: PerangkatPembelajaranScalarWhereInput | PerangkatPembelajaranScalarWhereInput[]
    id?: IntFilter<"PerangkatPembelajaran"> | number
    class_id?: IntFilter<"PerangkatPembelajaran"> | number
    subject_id?: IntFilter<"PerangkatPembelajaran"> | number
    teacher_id?: IntFilter<"PerangkatPembelajaran"> | number
    title?: StringFilter<"PerangkatPembelajaran"> | string
    description?: StringNullableFilter<"PerangkatPembelajaran"> | string | null
    file_url?: StringNullableFilter<"PerangkatPembelajaran"> | string | null
    type?: StringFilter<"PerangkatPembelajaran"> | string
    createdAt?: DateTimeFilter<"PerangkatPembelajaran"> | Date | string
  }

  export type SubmissionUpsertWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
    create: XOR<SubmissionCreateWithoutStudentInput, SubmissionUncheckedCreateWithoutStudentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutStudentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutStudentInput, SubmissionUncheckedUpdateWithoutStudentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutStudentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutStudentInput>
  }

  export type SubmissionScalarWhereInput = {
    AND?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    OR?: SubmissionScalarWhereInput[]
    NOT?: SubmissionScalarWhereInput | SubmissionScalarWhereInput[]
    id?: IntFilter<"Submission"> | number
    assignment_id?: IntFilter<"Submission"> | number
    student_id?: IntFilter<"Submission"> | number
    file_url?: StringFilter<"Submission"> | string
    submitted_at?: DateTimeFilter<"Submission"> | Date | string
    status?: StringFilter<"Submission"> | string
  }

  export type UserRoleCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutRolesInput
  }

  export type UserRoleUncheckedCreateWithoutRoleInput = {
    user_id: number
  }

  export type UserRoleCreateOrConnectWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleCreateManyRoleInputEnvelope = {
    data: UserRoleCreateManyRoleInput | UserRoleCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserRoleUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    update: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
    create: XOR<UserRoleCreateWithoutRoleInput, UserRoleUncheckedCreateWithoutRoleInput>
  }

  export type UserRoleUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserRoleWhereUniqueInput
    data: XOR<UserRoleUpdateWithoutRoleInput, UserRoleUncheckedUpdateWithoutRoleInput>
  }

  export type UserRoleUpdateManyWithWhereWithoutRoleInput = {
    where: UserRoleScalarWhereInput
    data: XOR<UserRoleUpdateManyMutationInput, UserRoleUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserCreateWithoutRolesInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutRolesInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
  }

  export type RoleCreateWithoutUsersInput = {
    name: string
    description?: string | null
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: number
    name: string
    description?: string | null
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type UserUpsertWithoutRolesInput = {
    update: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
    create: XOR<UserCreateWithoutRolesInput, UserUncheckedCreateWithoutRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRolesInput, UserUncheckedUpdateWithoutRolesInput>
  }

  export type UserUpdateWithoutRolesInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutRolesInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherAssignCreateWithoutSubjectInput = {
    teacher: UserCreateNestedOneWithoutTeacherAssignInput
    class: ClassCreateNestedOneWithoutTeacherAssignInput
  }

  export type TeacherAssignUncheckedCreateWithoutSubjectInput = {
    id?: number
    teacher_id: number
    class_id: number
  }

  export type TeacherAssignCreateOrConnectWithoutSubjectInput = {
    where: TeacherAssignWhereUniqueInput
    create: XOR<TeacherAssignCreateWithoutSubjectInput, TeacherAssignUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherAssignCreateManySubjectInputEnvelope = {
    data: TeacherAssignCreateManySubjectInput | TeacherAssignCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type MaterialCreateWithoutSubjectInput = {
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutMaterialsInput
    teacher: UserCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutSubjectInput = {
    id?: number
    class_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutSubjectInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutSubjectInput, MaterialUncheckedCreateWithoutSubjectInput>
  }

  export type MaterialCreateManySubjectInputEnvelope = {
    data: MaterialCreateManySubjectInput | MaterialCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutSubjectInput = {
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutSubjectInput = {
    id?: number
    class_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutSubjectInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type AssignmentCreateManySubjectInputEnvelope = {
    data: AssignmentCreateManySubjectInput | AssignmentCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type PerangkatPembelajaranCreateWithoutSubjectInput = {
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutPerangkat_pembelajaranInput
    teacher: UserCreateNestedOneWithoutPerangkat_pembelajaranInput
  }

  export type PerangkatPembelajaranUncheckedCreateWithoutSubjectInput = {
    id?: number
    class_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranCreateOrConnectWithoutSubjectInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    create: XOR<PerangkatPembelajaranCreateWithoutSubjectInput, PerangkatPembelajaranUncheckedCreateWithoutSubjectInput>
  }

  export type PerangkatPembelajaranCreateManySubjectInputEnvelope = {
    data: PerangkatPembelajaranCreateManySubjectInput | PerangkatPembelajaranCreateManySubjectInput[]
    skipDuplicates?: boolean
  }

  export type TeacherAssignUpsertWithWhereUniqueWithoutSubjectInput = {
    where: TeacherAssignWhereUniqueInput
    update: XOR<TeacherAssignUpdateWithoutSubjectInput, TeacherAssignUncheckedUpdateWithoutSubjectInput>
    create: XOR<TeacherAssignCreateWithoutSubjectInput, TeacherAssignUncheckedCreateWithoutSubjectInput>
  }

  export type TeacherAssignUpdateWithWhereUniqueWithoutSubjectInput = {
    where: TeacherAssignWhereUniqueInput
    data: XOR<TeacherAssignUpdateWithoutSubjectInput, TeacherAssignUncheckedUpdateWithoutSubjectInput>
  }

  export type TeacherAssignUpdateManyWithWhereWithoutSubjectInput = {
    where: TeacherAssignScalarWhereInput
    data: XOR<TeacherAssignUpdateManyMutationInput, TeacherAssignUncheckedUpdateManyWithoutSubjectInput>
  }

  export type MaterialUpsertWithWhereUniqueWithoutSubjectInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutSubjectInput, MaterialUncheckedUpdateWithoutSubjectInput>
    create: XOR<MaterialCreateWithoutSubjectInput, MaterialUncheckedCreateWithoutSubjectInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutSubjectInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutSubjectInput, MaterialUncheckedUpdateWithoutSubjectInput>
  }

  export type MaterialUpdateManyWithWhereWithoutSubjectInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutSubjectInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutSubjectInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutSubjectInput, AssignmentUncheckedUpdateWithoutSubjectInput>
    create: XOR<AssignmentCreateWithoutSubjectInput, AssignmentUncheckedCreateWithoutSubjectInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutSubjectInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutSubjectInput, AssignmentUncheckedUpdateWithoutSubjectInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutSubjectInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutSubjectInput>
  }

  export type PerangkatPembelajaranUpsertWithWhereUniqueWithoutSubjectInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    update: XOR<PerangkatPembelajaranUpdateWithoutSubjectInput, PerangkatPembelajaranUncheckedUpdateWithoutSubjectInput>
    create: XOR<PerangkatPembelajaranCreateWithoutSubjectInput, PerangkatPembelajaranUncheckedCreateWithoutSubjectInput>
  }

  export type PerangkatPembelajaranUpdateWithWhereUniqueWithoutSubjectInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    data: XOR<PerangkatPembelajaranUpdateWithoutSubjectInput, PerangkatPembelajaranUncheckedUpdateWithoutSubjectInput>
  }

  export type PerangkatPembelajaranUpdateManyWithWhereWithoutSubjectInput = {
    where: PerangkatPembelajaranScalarWhereInput
    data: XOR<PerangkatPembelajaranUpdateManyMutationInput, PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectInput>
  }

  export type TeacherAssignCreateWithoutClassInput = {
    teacher: UserCreateNestedOneWithoutTeacherAssignInput
    subject: SubjectCreateNestedOneWithoutTeacherAssignInput
  }

  export type TeacherAssignUncheckedCreateWithoutClassInput = {
    id?: number
    teacher_id: number
    subject_id: number
  }

  export type TeacherAssignCreateOrConnectWithoutClassInput = {
    where: TeacherAssignWhereUniqueInput
    create: XOR<TeacherAssignCreateWithoutClassInput, TeacherAssignUncheckedCreateWithoutClassInput>
  }

  export type TeacherAssignCreateManyClassInputEnvelope = {
    data: TeacherAssignCreateManyClassInput | TeacherAssignCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type EnrollmentCreateWithoutClassInput = {
    student: UserCreateNestedOneWithoutEnrollmentsInput
  }

  export type EnrollmentUncheckedCreateWithoutClassInput = {
    id?: number
    student_id: number
  }

  export type EnrollmentCreateOrConnectWithoutClassInput = {
    where: EnrollmentWhereUniqueInput
    create: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput>
  }

  export type EnrollmentCreateManyClassInputEnvelope = {
    data: EnrollmentCreateManyClassInput | EnrollmentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type MaterialCreateWithoutClassInput = {
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutMaterialsInput
    teacher: UserCreateNestedOneWithoutMaterialsInput
  }

  export type MaterialUncheckedCreateWithoutClassInput = {
    id?: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type MaterialCreateOrConnectWithoutClassInput = {
    where: MaterialWhereUniqueInput
    create: XOR<MaterialCreateWithoutClassInput, MaterialUncheckedCreateWithoutClassInput>
  }

  export type MaterialCreateManyClassInputEnvelope = {
    data: MaterialCreateManyClassInput | MaterialCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutClassInput = {
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignmentsInput
    submissions?: SubmissionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutClassInput = {
    id?: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    submissions?: SubmissionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput>
  }

  export type AssignmentCreateManyClassInputEnvelope = {
    data: AssignmentCreateManyClassInput | AssignmentCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type AnnouncementCreateWithoutClassInput = {
    scope: string
    title: string
    content: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutAnnouncementsInput
  }

  export type AnnouncementUncheckedCreateWithoutClassInput = {
    id?: number
    scope: string
    created_by: number
    title: string
    content: string
    createdAt?: Date | string
  }

  export type AnnouncementCreateOrConnectWithoutClassInput = {
    where: AnnouncementWhereUniqueInput
    create: XOR<AnnouncementCreateWithoutClassInput, AnnouncementUncheckedCreateWithoutClassInput>
  }

  export type AnnouncementCreateManyClassInputEnvelope = {
    data: AnnouncementCreateManyClassInput | AnnouncementCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type PerangkatPembelajaranCreateWithoutClassInput = {
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
    subject: SubjectCreateNestedOneWithoutPerangkat_pembelajaranInput
    teacher: UserCreateNestedOneWithoutPerangkat_pembelajaranInput
  }

  export type PerangkatPembelajaranUncheckedCreateWithoutClassInput = {
    id?: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranCreateOrConnectWithoutClassInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    create: XOR<PerangkatPembelajaranCreateWithoutClassInput, PerangkatPembelajaranUncheckedCreateWithoutClassInput>
  }

  export type PerangkatPembelajaranCreateManyClassInputEnvelope = {
    data: PerangkatPembelajaranCreateManyClassInput | PerangkatPembelajaranCreateManyClassInput[]
    skipDuplicates?: boolean
  }

  export type TeacherAssignUpsertWithWhereUniqueWithoutClassInput = {
    where: TeacherAssignWhereUniqueInput
    update: XOR<TeacherAssignUpdateWithoutClassInput, TeacherAssignUncheckedUpdateWithoutClassInput>
    create: XOR<TeacherAssignCreateWithoutClassInput, TeacherAssignUncheckedCreateWithoutClassInput>
  }

  export type TeacherAssignUpdateWithWhereUniqueWithoutClassInput = {
    where: TeacherAssignWhereUniqueInput
    data: XOR<TeacherAssignUpdateWithoutClassInput, TeacherAssignUncheckedUpdateWithoutClassInput>
  }

  export type TeacherAssignUpdateManyWithWhereWithoutClassInput = {
    where: TeacherAssignScalarWhereInput
    data: XOR<TeacherAssignUpdateManyMutationInput, TeacherAssignUncheckedUpdateManyWithoutClassInput>
  }

  export type EnrollmentUpsertWithWhereUniqueWithoutClassInput = {
    where: EnrollmentWhereUniqueInput
    update: XOR<EnrollmentUpdateWithoutClassInput, EnrollmentUncheckedUpdateWithoutClassInput>
    create: XOR<EnrollmentCreateWithoutClassInput, EnrollmentUncheckedCreateWithoutClassInput>
  }

  export type EnrollmentUpdateWithWhereUniqueWithoutClassInput = {
    where: EnrollmentWhereUniqueInput
    data: XOR<EnrollmentUpdateWithoutClassInput, EnrollmentUncheckedUpdateWithoutClassInput>
  }

  export type EnrollmentUpdateManyWithWhereWithoutClassInput = {
    where: EnrollmentScalarWhereInput
    data: XOR<EnrollmentUpdateManyMutationInput, EnrollmentUncheckedUpdateManyWithoutClassInput>
  }

  export type MaterialUpsertWithWhereUniqueWithoutClassInput = {
    where: MaterialWhereUniqueInput
    update: XOR<MaterialUpdateWithoutClassInput, MaterialUncheckedUpdateWithoutClassInput>
    create: XOR<MaterialCreateWithoutClassInput, MaterialUncheckedCreateWithoutClassInput>
  }

  export type MaterialUpdateWithWhereUniqueWithoutClassInput = {
    where: MaterialWhereUniqueInput
    data: XOR<MaterialUpdateWithoutClassInput, MaterialUncheckedUpdateWithoutClassInput>
  }

  export type MaterialUpdateManyWithWhereWithoutClassInput = {
    where: MaterialScalarWhereInput
    data: XOR<MaterialUpdateManyMutationInput, MaterialUncheckedUpdateManyWithoutClassInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutClassInput, AssignmentUncheckedUpdateWithoutClassInput>
    create: XOR<AssignmentCreateWithoutClassInput, AssignmentUncheckedCreateWithoutClassInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutClassInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutClassInput, AssignmentUncheckedUpdateWithoutClassInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutClassInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutClassInput>
  }

  export type AnnouncementUpsertWithWhereUniqueWithoutClassInput = {
    where: AnnouncementWhereUniqueInput
    update: XOR<AnnouncementUpdateWithoutClassInput, AnnouncementUncheckedUpdateWithoutClassInput>
    create: XOR<AnnouncementCreateWithoutClassInput, AnnouncementUncheckedCreateWithoutClassInput>
  }

  export type AnnouncementUpdateWithWhereUniqueWithoutClassInput = {
    where: AnnouncementWhereUniqueInput
    data: XOR<AnnouncementUpdateWithoutClassInput, AnnouncementUncheckedUpdateWithoutClassInput>
  }

  export type AnnouncementUpdateManyWithWhereWithoutClassInput = {
    where: AnnouncementScalarWhereInput
    data: XOR<AnnouncementUpdateManyMutationInput, AnnouncementUncheckedUpdateManyWithoutClassInput>
  }

  export type PerangkatPembelajaranUpsertWithWhereUniqueWithoutClassInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    update: XOR<PerangkatPembelajaranUpdateWithoutClassInput, PerangkatPembelajaranUncheckedUpdateWithoutClassInput>
    create: XOR<PerangkatPembelajaranCreateWithoutClassInput, PerangkatPembelajaranUncheckedCreateWithoutClassInput>
  }

  export type PerangkatPembelajaranUpdateWithWhereUniqueWithoutClassInput = {
    where: PerangkatPembelajaranWhereUniqueInput
    data: XOR<PerangkatPembelajaranUpdateWithoutClassInput, PerangkatPembelajaranUncheckedUpdateWithoutClassInput>
  }

  export type PerangkatPembelajaranUpdateManyWithWhereWithoutClassInput = {
    where: PerangkatPembelajaranScalarWhereInput
    data: XOR<PerangkatPembelajaranUpdateManyMutationInput, PerangkatPembelajaranUncheckedUpdateManyWithoutClassInput>
  }

  export type UserCreateWithoutTeacherAssignInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutTeacherAssignInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutTeacherAssignInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTeacherAssignInput, UserUncheckedCreateWithoutTeacherAssignInput>
  }

  export type ClassCreateWithoutTeacherAssignInput = {
    class_name: string
    grade_level?: string | null
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    materials?: MaterialCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    announcements?: AnnouncementCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutTeacherAssignInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    materials?: MaterialUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutTeacherAssignInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutTeacherAssignInput, ClassUncheckedCreateWithoutTeacherAssignInput>
  }

  export type SubjectCreateWithoutTeacherAssignInput = {
    subject_name: string
    code?: string | null
    materials?: MaterialCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutTeacherAssignInput = {
    id?: number
    subject_name: string
    code?: string | null
    materials?: MaterialUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutTeacherAssignInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutTeacherAssignInput, SubjectUncheckedCreateWithoutTeacherAssignInput>
  }

  export type UserUpsertWithoutTeacherAssignInput = {
    update: XOR<UserUpdateWithoutTeacherAssignInput, UserUncheckedUpdateWithoutTeacherAssignInput>
    create: XOR<UserCreateWithoutTeacherAssignInput, UserUncheckedCreateWithoutTeacherAssignInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTeacherAssignInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTeacherAssignInput, UserUncheckedUpdateWithoutTeacherAssignInput>
  }

  export type UserUpdateWithoutTeacherAssignInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutTeacherAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassUpsertWithoutTeacherAssignInput = {
    update: XOR<ClassUpdateWithoutTeacherAssignInput, ClassUncheckedUpdateWithoutTeacherAssignInput>
    create: XOR<ClassCreateWithoutTeacherAssignInput, ClassUncheckedCreateWithoutTeacherAssignInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutTeacherAssignInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutTeacherAssignInput, ClassUncheckedUpdateWithoutTeacherAssignInput>
  }

  export type ClassUpdateWithoutTeacherAssignInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    materials?: MaterialUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutTeacherAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutTeacherAssignInput = {
    update: XOR<SubjectUpdateWithoutTeacherAssignInput, SubjectUncheckedUpdateWithoutTeacherAssignInput>
    create: XOR<SubjectCreateWithoutTeacherAssignInput, SubjectUncheckedCreateWithoutTeacherAssignInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutTeacherAssignInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutTeacherAssignInput, SubjectUncheckedUpdateWithoutTeacherAssignInput>
  }

  export type SubjectUpdateWithoutTeacherAssignInput = {
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutTeacherAssignInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    materials?: MaterialUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserCreateWithoutEnrollmentsInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutEnrollmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
  }

  export type ClassCreateWithoutEnrollmentsInput = {
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutClassInput
    materials?: MaterialCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    announcements?: AnnouncementCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutEnrollmentsInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutClassInput
    materials?: MaterialUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutEnrollmentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
  }

  export type UserUpsertWithoutEnrollmentsInput = {
    update: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<UserCreateWithoutEnrollmentsInput, UserUncheckedCreateWithoutEnrollmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutEnrollmentsInput, UserUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type UserUpdateWithoutEnrollmentsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassUpsertWithoutEnrollmentsInput = {
    update: XOR<ClassUpdateWithoutEnrollmentsInput, ClassUncheckedUpdateWithoutEnrollmentsInput>
    create: XOR<ClassCreateWithoutEnrollmentsInput, ClassUncheckedCreateWithoutEnrollmentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutEnrollmentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutEnrollmentsInput, ClassUncheckedUpdateWithoutEnrollmentsInput>
  }

  export type ClassUpdateWithoutEnrollmentsInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutClassNestedInput
    materials?: MaterialUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutEnrollmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutClassNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput
  }

  export type ClassCreateWithoutMaterialsInput = {
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    announcements?: AnnouncementCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutMaterialsInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutMaterialsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutMaterialsInput, ClassUncheckedCreateWithoutMaterialsInput>
  }

  export type SubjectCreateWithoutMaterialsInput = {
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutMaterialsInput = {
    id?: number
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutMaterialsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutMaterialsInput, SubjectUncheckedCreateWithoutMaterialsInput>
  }

  export type UserCreateWithoutMaterialsInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutMaterialsInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutMaterialsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMaterialsInput, UserUncheckedCreateWithoutMaterialsInput>
  }

  export type ClassUpsertWithoutMaterialsInput = {
    update: XOR<ClassUpdateWithoutMaterialsInput, ClassUncheckedUpdateWithoutMaterialsInput>
    create: XOR<ClassCreateWithoutMaterialsInput, ClassUncheckedCreateWithoutMaterialsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutMaterialsInput, ClassUncheckedUpdateWithoutMaterialsInput>
  }

  export type ClassUpdateWithoutMaterialsInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutMaterialsInput = {
    update: XOR<SubjectUpdateWithoutMaterialsInput, SubjectUncheckedUpdateWithoutMaterialsInput>
    create: XOR<SubjectCreateWithoutMaterialsInput, SubjectUncheckedCreateWithoutMaterialsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutMaterialsInput, SubjectUncheckedUpdateWithoutMaterialsInput>
  }

  export type SubjectUpdateWithoutMaterialsInput = {
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserUpsertWithoutMaterialsInput = {
    update: XOR<UserUpdateWithoutMaterialsInput, UserUncheckedUpdateWithoutMaterialsInput>
    create: XOR<UserCreateWithoutMaterialsInput, UserUncheckedCreateWithoutMaterialsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMaterialsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMaterialsInput, UserUncheckedUpdateWithoutMaterialsInput>
  }

  export type UserUpdateWithoutMaterialsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutMaterialsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type ClassCreateWithoutAssignmentsInput = {
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    materials?: MaterialCreateNestedManyWithoutClassInput
    announcements?: AnnouncementCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    materials?: MaterialUncheckedCreateNestedManyWithoutClassInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAssignmentsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
  }

  export type SubjectCreateWithoutAssignmentsInput = {
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutSubjectInput
    materials?: MaterialCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutSubjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutSubjectInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutAssignmentsInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
  }

  export type UserCreateWithoutAssignmentsInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAssignmentsInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAssignmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
  }

  export type SubmissionCreateWithoutAssignmentInput = {
    file_url: string
    submitted_at?: Date | string
    status?: string
    student: UserCreateNestedOneWithoutStudent_submissionsInput
  }

  export type SubmissionUncheckedCreateWithoutAssignmentInput = {
    id?: number
    student_id: number
    file_url: string
    submitted_at?: Date | string
    status?: string
  }

  export type SubmissionCreateOrConnectWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionCreateManyAssignmentInputEnvelope = {
    data: SubmissionCreateManyAssignmentInput | SubmissionCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ClassUpsertWithoutAssignmentsInput = {
    update: XOR<ClassUpdateWithoutAssignmentsInput, ClassUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<ClassCreateWithoutAssignmentsInput, ClassUncheckedCreateWithoutAssignmentsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAssignmentsInput, ClassUncheckedUpdateWithoutAssignmentsInput>
  }

  export type ClassUpdateWithoutAssignmentsInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    materials?: MaterialUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutAssignmentsInput = {
    update: XOR<SubjectUpdateWithoutAssignmentsInput, SubjectUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<SubjectCreateWithoutAssignmentsInput, SubjectUncheckedCreateWithoutAssignmentsInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutAssignmentsInput, SubjectUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SubjectUpdateWithoutAssignmentsInput = {
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutSubjectNestedInput
    materials?: MaterialUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutSubjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutSubjectNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserUpsertWithoutAssignmentsInput = {
    update: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<UserCreateWithoutAssignmentsInput, UserUncheckedCreateWithoutAssignmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAssignmentsInput, UserUncheckedUpdateWithoutAssignmentsInput>
  }

  export type UserUpdateWithoutAssignmentsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAssignmentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type SubmissionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    update: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SubmissionCreateWithoutAssignmentInput, SubmissionUncheckedCreateWithoutAssignmentInput>
  }

  export type SubmissionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: SubmissionWhereUniqueInput
    data: XOR<SubmissionUpdateWithoutAssignmentInput, SubmissionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SubmissionUpdateManyWithWhereWithoutAssignmentInput = {
    where: SubmissionScalarWhereInput
    data: XOR<SubmissionUpdateManyMutationInput, SubmissionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type ClassCreateWithoutAnnouncementsInput = {
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    materials?: MaterialCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutAnnouncementsInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    materials?: MaterialUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutAnnouncementsInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutAnnouncementsInput, ClassUncheckedCreateWithoutAnnouncementsInput>
  }

  export type UserCreateWithoutAnnouncementsInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutAnnouncementsInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutAnnouncementsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
  }

  export type ClassUpsertWithoutAnnouncementsInput = {
    update: XOR<ClassUpdateWithoutAnnouncementsInput, ClassUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<ClassCreateWithoutAnnouncementsInput, ClassUncheckedCreateWithoutAnnouncementsInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutAnnouncementsInput, ClassUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type ClassUpdateWithoutAnnouncementsInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    materials?: MaterialUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutClassNestedInput
  }

  export type UserUpsertWithoutAnnouncementsInput = {
    update: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
    create: XOR<UserCreateWithoutAnnouncementsInput, UserUncheckedCreateWithoutAnnouncementsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAnnouncementsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAnnouncementsInput, UserUncheckedUpdateWithoutAnnouncementsInput>
  }

  export type UserUpdateWithoutAnnouncementsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutAnnouncementsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AssignmentCreateWithoutSubmissionsInput = {
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
    class: ClassCreateNestedOneWithoutAssignmentsInput
    subject: SubjectCreateNestedOneWithoutAssignmentsInput
    teacher: UserCreateNestedOneWithoutAssignmentsInput
  }

  export type AssignmentUncheckedCreateWithoutSubmissionsInput = {
    id?: number
    class_id: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateOrConnectWithoutSubmissionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
  }

  export type UserCreateWithoutStudent_submissionsInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranCreateNestedManyWithoutTeacherInput
  }

  export type UserUncheckedCreateWithoutStudent_submissionsInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedCreateNestedManyWithoutTeacherInput
  }

  export type UserCreateOrConnectWithoutStudent_submissionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutStudent_submissionsInput, UserUncheckedCreateWithoutStudent_submissionsInput>
  }

  export type AssignmentUpsertWithoutSubmissionsInput = {
    update: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
    create: XOR<AssignmentCreateWithoutSubmissionsInput, AssignmentUncheckedCreateWithoutSubmissionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSubmissionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSubmissionsInput, AssignmentUncheckedUpdateWithoutSubmissionsInput>
  }

  export type AssignmentUpdateWithoutSubmissionsInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubmissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutStudent_submissionsInput = {
    update: XOR<UserUpdateWithoutStudent_submissionsInput, UserUncheckedUpdateWithoutStudent_submissionsInput>
    create: XOR<UserCreateWithoutStudent_submissionsInput, UserUncheckedCreateWithoutStudent_submissionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutStudent_submissionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutStudent_submissionsInput, UserUncheckedUpdateWithoutStudent_submissionsInput>
  }

  export type UserUpdateWithoutStudent_submissionsInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUpdateManyWithoutTeacherNestedInput
  }

  export type UserUncheckedUpdateWithoutStudent_submissionsInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    perangkat_pembelajaran?: PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherNestedInput
  }

  export type ClassCreateWithoutPerangkat_pembelajaranInput = {
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentCreateNestedManyWithoutClassInput
    materials?: MaterialCreateNestedManyWithoutClassInput
    assignments?: AssignmentCreateNestedManyWithoutClassInput
    announcements?: AnnouncementCreateNestedManyWithoutClassInput
  }

  export type ClassUncheckedCreateWithoutPerangkat_pembelajaranInput = {
    id?: number
    class_name: string
    grade_level?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutClassInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutClassInput
    materials?: MaterialUncheckedCreateNestedManyWithoutClassInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutClassInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutClassInput
  }

  export type ClassCreateOrConnectWithoutPerangkat_pembelajaranInput = {
    where: ClassWhereUniqueInput
    create: XOR<ClassCreateWithoutPerangkat_pembelajaranInput, ClassUncheckedCreateWithoutPerangkat_pembelajaranInput>
  }

  export type SubjectCreateWithoutPerangkat_pembelajaranInput = {
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignCreateNestedManyWithoutSubjectInput
    materials?: MaterialCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentCreateNestedManyWithoutSubjectInput
  }

  export type SubjectUncheckedCreateWithoutPerangkat_pembelajaranInput = {
    id?: number
    subject_name: string
    code?: string | null
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutSubjectInput
    materials?: MaterialUncheckedCreateNestedManyWithoutSubjectInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutSubjectInput
  }

  export type SubjectCreateOrConnectWithoutPerangkat_pembelajaranInput = {
    where: SubjectWhereUniqueInput
    create: XOR<SubjectCreateWithoutPerangkat_pembelajaranInput, SubjectUncheckedCreateWithoutPerangkat_pembelajaranInput>
  }

  export type UserCreateWithoutPerangkat_pembelajaranInput = {
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignCreateNestedManyWithoutTeacherInput
    materials?: MaterialCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentCreateNestedManyWithoutStudentInput
    student_submissions?: SubmissionCreateNestedManyWithoutStudentInput
  }

  export type UserUncheckedCreateWithoutPerangkat_pembelajaranInput = {
    id?: number
    full_name: string
    username: string
    email: string
    password_hash: string
    createdAt?: Date | string
    updatedAt?: Date | string
    roles?: UserRoleUncheckedCreateNestedManyWithoutUserInput
    teacherAssign?: TeacherAssignUncheckedCreateNestedManyWithoutTeacherInput
    materials?: MaterialUncheckedCreateNestedManyWithoutTeacherInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutTeacherInput
    announcements?: AnnouncementUncheckedCreateNestedManyWithoutCreatorInput
    enrollments?: EnrollmentUncheckedCreateNestedManyWithoutStudentInput
    student_submissions?: SubmissionUncheckedCreateNestedManyWithoutStudentInput
  }

  export type UserCreateOrConnectWithoutPerangkat_pembelajaranInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPerangkat_pembelajaranInput, UserUncheckedCreateWithoutPerangkat_pembelajaranInput>
  }

  export type ClassUpsertWithoutPerangkat_pembelajaranInput = {
    update: XOR<ClassUpdateWithoutPerangkat_pembelajaranInput, ClassUncheckedUpdateWithoutPerangkat_pembelajaranInput>
    create: XOR<ClassCreateWithoutPerangkat_pembelajaranInput, ClassUncheckedCreateWithoutPerangkat_pembelajaranInput>
    where?: ClassWhereInput
  }

  export type ClassUpdateToOneWithWhereWithoutPerangkat_pembelajaranInput = {
    where?: ClassWhereInput
    data: XOR<ClassUpdateWithoutPerangkat_pembelajaranInput, ClassUncheckedUpdateWithoutPerangkat_pembelajaranInput>
  }

  export type ClassUpdateWithoutPerangkat_pembelajaranInput = {
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUpdateManyWithoutClassNestedInput
    materials?: MaterialUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUpdateManyWithoutClassNestedInput
  }

  export type ClassUncheckedUpdateWithoutPerangkat_pembelajaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_name?: StringFieldUpdateOperationsInput | string
    grade_level?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutClassNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutClassNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutClassNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutClassNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutClassNestedInput
  }

  export type SubjectUpsertWithoutPerangkat_pembelajaranInput = {
    update: XOR<SubjectUpdateWithoutPerangkat_pembelajaranInput, SubjectUncheckedUpdateWithoutPerangkat_pembelajaranInput>
    create: XOR<SubjectCreateWithoutPerangkat_pembelajaranInput, SubjectUncheckedCreateWithoutPerangkat_pembelajaranInput>
    where?: SubjectWhereInput
  }

  export type SubjectUpdateToOneWithWhereWithoutPerangkat_pembelajaranInput = {
    where?: SubjectWhereInput
    data: XOR<SubjectUpdateWithoutPerangkat_pembelajaranInput, SubjectUncheckedUpdateWithoutPerangkat_pembelajaranInput>
  }

  export type SubjectUpdateWithoutPerangkat_pembelajaranInput = {
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUpdateManyWithoutSubjectNestedInput
    materials?: MaterialUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUpdateManyWithoutSubjectNestedInput
  }

  export type SubjectUncheckedUpdateWithoutPerangkat_pembelajaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_name?: StringFieldUpdateOperationsInput | string
    code?: NullableStringFieldUpdateOperationsInput | string | null
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutSubjectNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutSubjectNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutSubjectNestedInput
  }

  export type UserUpsertWithoutPerangkat_pembelajaranInput = {
    update: XOR<UserUpdateWithoutPerangkat_pembelajaranInput, UserUncheckedUpdateWithoutPerangkat_pembelajaranInput>
    create: XOR<UserCreateWithoutPerangkat_pembelajaranInput, UserUncheckedCreateWithoutPerangkat_pembelajaranInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPerangkat_pembelajaranInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPerangkat_pembelajaranInput, UserUncheckedUpdateWithoutPerangkat_pembelajaranInput>
  }

  export type UserUpdateWithoutPerangkat_pembelajaranInput = {
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUpdateManyWithoutStudentNestedInput
    student_submissions?: SubmissionUpdateManyWithoutStudentNestedInput
  }

  export type UserUncheckedUpdateWithoutPerangkat_pembelajaranInput = {
    id?: IntFieldUpdateOperationsInput | number
    full_name?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    roles?: UserRoleUncheckedUpdateManyWithoutUserNestedInput
    teacherAssign?: TeacherAssignUncheckedUpdateManyWithoutTeacherNestedInput
    materials?: MaterialUncheckedUpdateManyWithoutTeacherNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutTeacherNestedInput
    announcements?: AnnouncementUncheckedUpdateManyWithoutCreatorNestedInput
    enrollments?: EnrollmentUncheckedUpdateManyWithoutStudentNestedInput
    student_submissions?: SubmissionUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type UserRoleCreateManyUserInput = {
    role_id: number
  }

  export type TeacherAssignCreateManyTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
  }

  export type MaterialCreateManyTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateManyTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementCreateManyCreatorInput = {
    id?: number
    scope: string
    class_id?: number | null
    title: string
    content: string
    createdAt?: Date | string
  }

  export type EnrollmentCreateManyStudentInput = {
    id?: number
    class_id: number
  }

  export type PerangkatPembelajaranCreateManyTeacherInput = {
    id?: number
    class_id: number
    subject_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type SubmissionCreateManyStudentInput = {
    id?: number
    assignment_id: number
    file_url: string
    submitted_at?: Date | string
    status?: string
  }

  export type UserRoleUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutUserInput = {
    role_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAssignUpdateWithoutTeacherInput = {
    class?: ClassUpdateOneRequiredWithoutTeacherAssignNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherAssignNestedInput
  }

  export type TeacherAssignUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAssignUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutMaterialsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    subject?: SubjectUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutCreatorInput = {
    scope?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    class_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyWithoutCreatorInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    class_id?: NullableIntFieldUpdateOperationsInput | number | null
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EnrollmentUpdateWithoutStudentInput = {
    class?: ClassUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type PerangkatPembelajaranUpdateWithoutTeacherInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
    subject?: SubjectUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
  }

  export type PerangkatPembelajaranUncheckedUpdateWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranUncheckedUpdateManyWithoutTeacherInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionUpdateWithoutStudentInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    assignment?: AssignmentUpdateOneRequiredWithoutSubmissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutStudentInput = {
    id?: IntFieldUpdateOperationsInput | number
    assignment_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type UserRoleCreateManyRoleInput = {
    user_id: number
  }

  export type UserRoleUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutRolesNestedInput
  }

  export type UserRoleUncheckedUpdateWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type UserRoleUncheckedUpdateManyWithoutRoleInput = {
    user_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAssignCreateManySubjectInput = {
    id?: number
    teacher_id: number
    class_id: number
  }

  export type MaterialCreateManySubjectInput = {
    id?: number
    class_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateManySubjectInput = {
    id?: number
    class_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranCreateManySubjectInput = {
    id?: number
    class_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type TeacherAssignUpdateWithoutSubjectInput = {
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignNestedInput
    class?: ClassUpdateOneRequiredWithoutTeacherAssignNestedInput
  }

  export type TeacherAssignUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAssignUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialUpdateWithoutSubjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutMaterialsNestedInput
    teacher?: UserUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutSubjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranUpdateWithoutSubjectInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    class?: ClassUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
    teacher?: UserUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
  }

  export type PerangkatPembelajaranUncheckedUpdateWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranUncheckedUpdateManyWithoutSubjectInput = {
    id?: IntFieldUpdateOperationsInput | number
    class_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TeacherAssignCreateManyClassInput = {
    id?: number
    teacher_id: number
    subject_id: number
  }

  export type EnrollmentCreateManyClassInput = {
    id?: number
    student_id: number
  }

  export type MaterialCreateManyClassInput = {
    id?: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    createdAt?: Date | string
  }

  export type AssignmentCreateManyClassInput = {
    id?: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    attachment_url?: string | null
    due_at?: Date | string | null
    createdAt?: Date | string
  }

  export type AnnouncementCreateManyClassInput = {
    id?: number
    scope: string
    created_by: number
    title: string
    content: string
    createdAt?: Date | string
  }

  export type PerangkatPembelajaranCreateManyClassInput = {
    id?: number
    subject_id: number
    teacher_id: number
    title: string
    description?: string | null
    file_url?: string | null
    type?: string
    createdAt?: Date | string
  }

  export type TeacherAssignUpdateWithoutClassInput = {
    teacher?: UserUpdateOneRequiredWithoutTeacherAssignNestedInput
    subject?: SubjectUpdateOneRequiredWithoutTeacherAssignNestedInput
  }

  export type TeacherAssignUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type TeacherAssignUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUpdateWithoutClassInput = {
    student?: UserUpdateOneRequiredWithoutEnrollmentsNestedInput
  }

  export type EnrollmentUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type EnrollmentUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
  }

  export type MaterialUpdateWithoutClassInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutMaterialsNestedInput
    teacher?: UserUpdateOneRequiredWithoutMaterialsNestedInput
  }

  export type MaterialUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MaterialUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUpdateWithoutClassInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutAssignmentsNestedInput
    teacher?: UserUpdateOneRequiredWithoutAssignmentsNestedInput
    submissions?: SubmissionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    submissions?: SubmissionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    attachment_url?: NullableStringFieldUpdateOperationsInput | string | null
    due_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUpdateWithoutClassInput = {
    scope?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutAnnouncementsNestedInput
  }

  export type AnnouncementUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AnnouncementUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    scope?: StringFieldUpdateOperationsInput | string
    created_by?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranUpdateWithoutClassInput = {
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subject?: SubjectUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
    teacher?: UserUpdateOneRequiredWithoutPerangkat_pembelajaranNestedInput
  }

  export type PerangkatPembelajaranUncheckedUpdateWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PerangkatPembelajaranUncheckedUpdateManyWithoutClassInput = {
    id?: IntFieldUpdateOperationsInput | number
    subject_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    type?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubmissionCreateManyAssignmentInput = {
    id?: number
    student_id: number
    file_url: string
    submitted_at?: Date | string
    status?: string
  }

  export type SubmissionUpdateWithoutAssignmentInput = {
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    student?: UserUpdateOneRequiredWithoutStudent_submissionsNestedInput
  }

  export type SubmissionUncheckedUpdateWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }

  export type SubmissionUncheckedUpdateManyWithoutAssignmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    student_id?: IntFieldUpdateOperationsInput | number
    file_url?: StringFieldUpdateOperationsInput | string
    submitted_at?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleCountOutputTypeDefaultArgs instead
     */
    export type RoleCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectCountOutputTypeDefaultArgs instead
     */
    export type SubjectCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassCountOutputTypeDefaultArgs instead
     */
    export type ClassCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssignmentCountOutputTypeDefaultArgs instead
     */
    export type AssignmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssignmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RoleDefaultArgs instead
     */
    export type RoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = RoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserRoleDefaultArgs instead
     */
    export type UserRoleArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserRoleDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubjectDefaultArgs instead
     */
    export type SubjectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubjectDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClassDefaultArgs instead
     */
    export type ClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClassDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherAssignDefaultArgs instead
     */
    export type TeacherAssignArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherAssignDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EnrollmentDefaultArgs instead
     */
    export type EnrollmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EnrollmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MaterialDefaultArgs instead
     */
    export type MaterialArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MaterialDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssignmentDefaultArgs instead
     */
    export type AssignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssignmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AnnouncementDefaultArgs instead
     */
    export type AnnouncementArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AnnouncementDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SubmissionDefaultArgs instead
     */
    export type SubmissionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SubmissionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PerangkatPembelajaranDefaultArgs instead
     */
    export type PerangkatPembelajaranArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PerangkatPembelajaranDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}