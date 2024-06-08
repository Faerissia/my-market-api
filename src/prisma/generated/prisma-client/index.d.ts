
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
 * Model USER
 * 
 */
export type USER = $Result.DefaultSelection<Prisma.$USERPayload>
/**
 * Model PRODUCT
 * 
 */
export type PRODUCT = $Result.DefaultSelection<Prisma.$PRODUCTPayload>
/**
 * Model PRODUCT_FAVORITE
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type PRODUCT_FAVORITE = $Result.DefaultSelection<Prisma.$PRODUCT_FAVORITEPayload>
/**
 * Model PRODUCT_LIKE
 * This model or at least one of its fields has comments in the database, and requires an additional setup for migrations: Read more: https://pris.ly/d/database-comments
 */
export type PRODUCT_LIKE = $Result.DefaultSelection<Prisma.$PRODUCT_LIKEPayload>
/**
 * Model PRODUCT_CATEGORY
 * 
 */
export type PRODUCT_CATEGORY = $Result.DefaultSelection<Prisma.$PRODUCT_CATEGORYPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more USERS
 * const uSERS = await prisma.uSER.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more USERS
   * const uSERS = await prisma.uSER.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.uSER`: Exposes CRUD operations for the **USER** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more USERS
    * const uSERS = await prisma.uSER.findMany()
    * ```
    */
  get uSER(): Prisma.USERDelegate<ExtArgs>;

  /**
   * `prisma.pRODUCT`: Exposes CRUD operations for the **PRODUCT** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRODUCTS
    * const pRODUCTS = await prisma.pRODUCT.findMany()
    * ```
    */
  get pRODUCT(): Prisma.PRODUCTDelegate<ExtArgs>;

  /**
   * `prisma.pRODUCT_FAVORITE`: Exposes CRUD operations for the **PRODUCT_FAVORITE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRODUCT_FAVORITES
    * const pRODUCT_FAVORITES = await prisma.pRODUCT_FAVORITE.findMany()
    * ```
    */
  get pRODUCT_FAVORITE(): Prisma.PRODUCT_FAVORITEDelegate<ExtArgs>;

  /**
   * `prisma.pRODUCT_LIKE`: Exposes CRUD operations for the **PRODUCT_LIKE** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRODUCT_LIKES
    * const pRODUCT_LIKES = await prisma.pRODUCT_LIKE.findMany()
    * ```
    */
  get pRODUCT_LIKE(): Prisma.PRODUCT_LIKEDelegate<ExtArgs>;

  /**
   * `prisma.pRODUCT_CATEGORY`: Exposes CRUD operations for the **PRODUCT_CATEGORY** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PRODUCT_CATEGORIES
    * const pRODUCT_CATEGORIES = await prisma.pRODUCT_CATEGORY.findMany()
    * ```
    */
  get pRODUCT_CATEGORY(): Prisma.PRODUCT_CATEGORYDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.10.2
   * Query Engine version: 5a9203d0590c951969e85a7d07215503f4672eb9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    USER: 'USER',
    PRODUCT: 'PRODUCT',
    PRODUCT_FAVORITE: 'PRODUCT_FAVORITE',
    PRODUCT_LIKE: 'PRODUCT_LIKE',
    PRODUCT_CATEGORY: 'PRODUCT_CATEGORY'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'uSER' | 'pRODUCT' | 'pRODUCT_FAVORITE' | 'pRODUCT_LIKE' | 'pRODUCT_CATEGORY'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      USER: {
        payload: Prisma.$USERPayload<ExtArgs>
        fields: Prisma.USERFieldRefs
        operations: {
          findUnique: {
            args: Prisma.USERFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.USERFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findFirst: {
            args: Prisma.USERFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.USERFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          findMany: {
            args: Prisma.USERFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>[]
          }
          create: {
            args: Prisma.USERCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          createMany: {
            args: Prisma.USERCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.USERDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          update: {
            args: Prisma.USERUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          deleteMany: {
            args: Prisma.USERDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.USERUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.USERUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$USERPayload>
          }
          aggregate: {
            args: Prisma.USERAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUSER>
          }
          groupBy: {
            args: Prisma.USERGroupByArgs<ExtArgs>,
            result: $Utils.Optional<USERGroupByOutputType>[]
          }
          count: {
            args: Prisma.USERCountArgs<ExtArgs>,
            result: $Utils.Optional<USERCountAggregateOutputType> | number
          }
        }
      }
      PRODUCT: {
        payload: Prisma.$PRODUCTPayload<ExtArgs>
        fields: Prisma.PRODUCTFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRODUCTFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRODUCTFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          findFirst: {
            args: Prisma.PRODUCTFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRODUCTFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          findMany: {
            args: Prisma.PRODUCTFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>[]
          }
          create: {
            args: Prisma.PRODUCTCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          createMany: {
            args: Prisma.PRODUCTCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PRODUCTDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          update: {
            args: Prisma.PRODUCTUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          deleteMany: {
            args: Prisma.PRODUCTDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PRODUCTUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PRODUCTUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCTPayload>
          }
          aggregate: {
            args: Prisma.PRODUCTAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRODUCT>
          }
          groupBy: {
            args: Prisma.PRODUCTGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCTGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRODUCTCountArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCTCountAggregateOutputType> | number
          }
        }
      }
      PRODUCT_FAVORITE: {
        payload: Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>
        fields: Prisma.PRODUCT_FAVORITEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRODUCT_FAVORITEFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRODUCT_FAVORITEFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>
          }
          findFirst: {
            args: Prisma.PRODUCT_FAVORITEFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRODUCT_FAVORITEFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>
          }
          findMany: {
            args: Prisma.PRODUCT_FAVORITEFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>[]
          }
          create: {
            args: Prisma.PRODUCT_FAVORITECreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>
          }
          createMany: {
            args: Prisma.PRODUCT_FAVORITECreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PRODUCT_FAVORITEDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>
          }
          update: {
            args: Prisma.PRODUCT_FAVORITEUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>
          }
          deleteMany: {
            args: Prisma.PRODUCT_FAVORITEDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PRODUCT_FAVORITEUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PRODUCT_FAVORITEUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_FAVORITEPayload>
          }
          aggregate: {
            args: Prisma.PRODUCT_FAVORITEAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRODUCT_FAVORITE>
          }
          groupBy: {
            args: Prisma.PRODUCT_FAVORITEGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCT_FAVORITEGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRODUCT_FAVORITECountArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCT_FAVORITECountAggregateOutputType> | number
          }
        }
      }
      PRODUCT_LIKE: {
        payload: Prisma.$PRODUCT_LIKEPayload<ExtArgs>
        fields: Prisma.PRODUCT_LIKEFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRODUCT_LIKEFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRODUCT_LIKEFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>
          }
          findFirst: {
            args: Prisma.PRODUCT_LIKEFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRODUCT_LIKEFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>
          }
          findMany: {
            args: Prisma.PRODUCT_LIKEFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>[]
          }
          create: {
            args: Prisma.PRODUCT_LIKECreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>
          }
          createMany: {
            args: Prisma.PRODUCT_LIKECreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PRODUCT_LIKEDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>
          }
          update: {
            args: Prisma.PRODUCT_LIKEUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>
          }
          deleteMany: {
            args: Prisma.PRODUCT_LIKEDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PRODUCT_LIKEUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PRODUCT_LIKEUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_LIKEPayload>
          }
          aggregate: {
            args: Prisma.PRODUCT_LIKEAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRODUCT_LIKE>
          }
          groupBy: {
            args: Prisma.PRODUCT_LIKEGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCT_LIKEGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRODUCT_LIKECountArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCT_LIKECountAggregateOutputType> | number
          }
        }
      }
      PRODUCT_CATEGORY: {
        payload: Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>
        fields: Prisma.PRODUCT_CATEGORYFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PRODUCT_CATEGORYFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PRODUCT_CATEGORYFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>
          }
          findFirst: {
            args: Prisma.PRODUCT_CATEGORYFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PRODUCT_CATEGORYFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>
          }
          findMany: {
            args: Prisma.PRODUCT_CATEGORYFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>[]
          }
          create: {
            args: Prisma.PRODUCT_CATEGORYCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>
          }
          createMany: {
            args: Prisma.PRODUCT_CATEGORYCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PRODUCT_CATEGORYDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>
          }
          update: {
            args: Prisma.PRODUCT_CATEGORYUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>
          }
          deleteMany: {
            args: Prisma.PRODUCT_CATEGORYDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PRODUCT_CATEGORYUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PRODUCT_CATEGORYUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PRODUCT_CATEGORYPayload>
          }
          aggregate: {
            args: Prisma.PRODUCT_CATEGORYAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePRODUCT_CATEGORY>
          }
          groupBy: {
            args: Prisma.PRODUCT_CATEGORYGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCT_CATEGORYGroupByOutputType>[]
          }
          count: {
            args: Prisma.PRODUCT_CATEGORYCountArgs<ExtArgs>,
            result: $Utils.Optional<PRODUCT_CATEGORYCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type USERCountOutputType
   */

  export type USERCountOutputType = {
    PRODUCT: number
    PRODUCT_FAVORITE: number
  }

  export type USERCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PRODUCT?: boolean | USERCountOutputTypeCountPRODUCTArgs
    PRODUCT_FAVORITE?: boolean | USERCountOutputTypeCountPRODUCT_FAVORITEArgs
  }

  // Custom InputTypes

  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USERCountOutputType
     */
    select?: USERCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountPRODUCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCTWhereInput
  }


  /**
   * USERCountOutputType without action
   */
  export type USERCountOutputTypeCountPRODUCT_FAVORITEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCT_FAVORITEWhereInput
  }



  /**
   * Count Type PRODUCT_CATEGORYCountOutputType
   */

  export type PRODUCT_CATEGORYCountOutputType = {
    PRODUCT: number
  }

  export type PRODUCT_CATEGORYCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PRODUCT?: boolean | PRODUCT_CATEGORYCountOutputTypeCountPRODUCTArgs
  }

  // Custom InputTypes

  /**
   * PRODUCT_CATEGORYCountOutputType without action
   */
  export type PRODUCT_CATEGORYCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORYCountOutputType
     */
    select?: PRODUCT_CATEGORYCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PRODUCT_CATEGORYCountOutputType without action
   */
  export type PRODUCT_CATEGORYCountOutputTypeCountPRODUCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCTWhereInput
  }



  /**
   * Models
   */

  /**
   * Model USER
   */

  export type AggregateUSER = {
    _count: USERCountAggregateOutputType | null
    _avg: USERAvgAggregateOutputType | null
    _sum: USERSumAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  export type USERAvgAggregateOutputType = {
    id: number | null
    user_level: number | null
    status: number | null
  }

  export type USERSumAggregateOutputType = {
    id: number | null
    user_level: number | null
    status: number | null
  }

  export type USERMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    username: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    picture: string | null
    firebase_uid: string | null
    phone: string | null
    email: string | null
    user_level: number | null
    status: number | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type USERMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    username: string | null
    password: string | null
    first_name: string | null
    last_name: string | null
    picture: string | null
    firebase_uid: string | null
    phone: string | null
    email: string | null
    user_level: number | null
    status: number | null
    created_date: Date | null
    updated_date: Date | null
  }

  export type USERCountAggregateOutputType = {
    id: number
    uuid: number
    username: number
    password: number
    first_name: number
    last_name: number
    picture: number
    firebase_uid: number
    phone: number
    email: number
    user_level: number
    status: number
    created_date: number
    updated_date: number
    _all: number
  }


  export type USERAvgAggregateInputType = {
    id?: true
    user_level?: true
    status?: true
  }

  export type USERSumAggregateInputType = {
    id?: true
    user_level?: true
    status?: true
  }

  export type USERMinAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    picture?: true
    firebase_uid?: true
    phone?: true
    email?: true
    user_level?: true
    status?: true
    created_date?: true
    updated_date?: true
  }

  export type USERMaxAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    picture?: true
    firebase_uid?: true
    phone?: true
    email?: true
    user_level?: true
    status?: true
    created_date?: true
    updated_date?: true
  }

  export type USERCountAggregateInputType = {
    id?: true
    uuid?: true
    username?: true
    password?: true
    first_name?: true
    last_name?: true
    picture?: true
    firebase_uid?: true
    phone?: true
    email?: true
    user_level?: true
    status?: true
    created_date?: true
    updated_date?: true
    _all?: true
  }

  export type USERAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USER to aggregate.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationAndSearchRelevanceInput | USEROrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned USERS
    **/
    _count?: true | USERCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: USERAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: USERSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: USERMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: USERMaxAggregateInputType
  }

  export type GetUSERAggregateType<T extends USERAggregateArgs> = {
        [P in keyof T & keyof AggregateUSER]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUSER[P]>
      : GetScalarType<T[P], AggregateUSER[P]>
  }




  export type USERGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: USERWhereInput
    orderBy?: USEROrderByWithAggregationInput | USEROrderByWithAggregationInput[]
    by: USERScalarFieldEnum[] | USERScalarFieldEnum
    having?: USERScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: USERCountAggregateInputType | true
    _avg?: USERAvgAggregateInputType
    _sum?: USERSumAggregateInputType
    _min?: USERMinAggregateInputType
    _max?: USERMaxAggregateInputType
  }

  export type USERGroupByOutputType = {
    id: number
    uuid: string
    username: string | null
    password: string
    first_name: string | null
    last_name: string | null
    picture: string | null
    firebase_uid: string | null
    phone: string | null
    email: string
    user_level: number | null
    status: number
    created_date: Date | null
    updated_date: Date | null
    _count: USERCountAggregateOutputType | null
    _avg: USERAvgAggregateOutputType | null
    _sum: USERSumAggregateOutputType | null
    _min: USERMinAggregateOutputType | null
    _max: USERMaxAggregateOutputType | null
  }

  type GetUSERGroupByPayload<T extends USERGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<USERGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof USERGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], USERGroupByOutputType[P]>
            : GetScalarType<T[P], USERGroupByOutputType[P]>
        }
      >
    >


  export type USERSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    picture?: boolean
    firebase_uid?: boolean
    phone?: boolean
    email?: boolean
    user_level?: boolean
    status?: boolean
    created_date?: boolean
    updated_date?: boolean
    PRODUCT?: boolean | USER$PRODUCTArgs<ExtArgs>
    PRODUCT_FAVORITE?: boolean | USER$PRODUCT_FAVORITEArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["uSER"]>

  export type USERSelectScalar = {
    id?: boolean
    uuid?: boolean
    username?: boolean
    password?: boolean
    first_name?: boolean
    last_name?: boolean
    picture?: boolean
    firebase_uid?: boolean
    phone?: boolean
    email?: boolean
    user_level?: boolean
    status?: boolean
    created_date?: boolean
    updated_date?: boolean
  }

  export type USERInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PRODUCT?: boolean | USER$PRODUCTArgs<ExtArgs>
    PRODUCT_FAVORITE?: boolean | USER$PRODUCT_FAVORITEArgs<ExtArgs>
    _count?: boolean | USERCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $USERPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "USER"
    objects: {
      PRODUCT: Prisma.$PRODUCTPayload<ExtArgs>[]
      PRODUCT_FAVORITE: Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      username: string | null
      password: string
      first_name: string | null
      last_name: string | null
      picture: string | null
      firebase_uid: string | null
      phone: string | null
      email: string
      user_level: number | null
      status: number
      created_date: Date | null
      updated_date: Date | null
    }, ExtArgs["result"]["uSER"]>
    composites: {}
  }


  type USERGetPayload<S extends boolean | null | undefined | USERDefaultArgs> = $Result.GetResult<Prisma.$USERPayload, S>

  type USERCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<USERFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: USERCountAggregateInputType | true
    }

  export interface USERDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['USER'], meta: { name: 'USER' } }
    /**
     * Find zero or one USER that matches the filter.
     * @param {USERFindUniqueArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends USERFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, USERFindUniqueArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one USER that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {USERFindUniqueOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends USERFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USERFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first USER that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends USERFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, USERFindFirstArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first USER that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindFirstOrThrowArgs} args - Arguments to find a USER
     * @example
     * // Get one USER
     * const uSER = await prisma.uSER.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends USERFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, USERFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more USERS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all USERS
     * const uSERS = await prisma.uSER.findMany()
     * 
     * // Get first 10 USERS
     * const uSERS = await prisma.uSER.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const uSERWithIdOnly = await prisma.uSER.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends USERFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USERFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a USER.
     * @param {USERCreateArgs} args - Arguments to create a USER.
     * @example
     * // Create one USER
     * const USER = await prisma.uSER.create({
     *   data: {
     *     // ... data to create a USER
     *   }
     * })
     * 
    **/
    create<T extends USERCreateArgs<ExtArgs>>(
      args: SelectSubset<T, USERCreateArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many USERS.
     *     @param {USERCreateManyArgs} args - Arguments to create many USERS.
     *     @example
     *     // Create many USERS
     *     const uSER = await prisma.uSER.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends USERCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USERCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a USER.
     * @param {USERDeleteArgs} args - Arguments to delete one USER.
     * @example
     * // Delete one USER
     * const USER = await prisma.uSER.delete({
     *   where: {
     *     // ... filter to delete one USER
     *   }
     * })
     * 
    **/
    delete<T extends USERDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, USERDeleteArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one USER.
     * @param {USERUpdateArgs} args - Arguments to update one USER.
     * @example
     * // Update one USER
     * const uSER = await prisma.uSER.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends USERUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, USERUpdateArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more USERS.
     * @param {USERDeleteManyArgs} args - Arguments to filter USERS to delete.
     * @example
     * // Delete a few USERS
     * const { count } = await prisma.uSER.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends USERDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, USERDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many USERS
     * const uSER = await prisma.uSER.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends USERUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, USERUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one USER.
     * @param {USERUpsertArgs} args - Arguments to update or create a USER.
     * @example
     * // Update or create a USER
     * const uSER = await prisma.uSER.upsert({
     *   create: {
     *     // ... data to create a USER
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the USER we want to update
     *   }
     * })
    **/
    upsert<T extends USERUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, USERUpsertArgs<ExtArgs>>
    ): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of USERS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERCountArgs} args - Arguments to filter USERS to count.
     * @example
     * // Count the number of USERS
     * const count = await prisma.uSER.count({
     *   where: {
     *     // ... the filter for the USERS we want to count
     *   }
     * })
    **/
    count<T extends USERCountArgs>(
      args?: Subset<T, USERCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], USERCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends USERAggregateArgs>(args: Subset<T, USERAggregateArgs>): Prisma.PrismaPromise<GetUSERAggregateType<T>>

    /**
     * Group by USER.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {USERGroupByArgs} args - Group by arguments.
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
      T extends USERGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: USERGroupByArgs['orderBy'] }
        : { orderBy?: USERGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, USERGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUSERGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the USER model
   */
  readonly fields: USERFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for USER.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__USERClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PRODUCT<T extends USER$PRODUCTArgs<ExtArgs> = {}>(args?: Subset<T, USER$PRODUCTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findMany'> | Null>;

    PRODUCT_FAVORITE<T extends USER$PRODUCT_FAVORITEArgs<ExtArgs> = {}>(args?: Subset<T, USER$PRODUCT_FAVORITEArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the USER model
   */ 
  interface USERFieldRefs {
    readonly id: FieldRef<"USER", 'Int'>
    readonly uuid: FieldRef<"USER", 'String'>
    readonly username: FieldRef<"USER", 'String'>
    readonly password: FieldRef<"USER", 'String'>
    readonly first_name: FieldRef<"USER", 'String'>
    readonly last_name: FieldRef<"USER", 'String'>
    readonly picture: FieldRef<"USER", 'String'>
    readonly firebase_uid: FieldRef<"USER", 'String'>
    readonly phone: FieldRef<"USER", 'String'>
    readonly email: FieldRef<"USER", 'String'>
    readonly user_level: FieldRef<"USER", 'Int'>
    readonly status: FieldRef<"USER", 'Int'>
    readonly created_date: FieldRef<"USER", 'DateTime'>
    readonly updated_date: FieldRef<"USER", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * USER findUnique
   */
  export type USERFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER findUniqueOrThrow
   */
  export type USERFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where: USERWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER findFirst
   */
  export type USERFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationAndSearchRelevanceInput | USEROrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER findFirstOrThrow
   */
  export type USERFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USER to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationAndSearchRelevanceInput | USEROrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of USERS.
     */
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER findMany
   */
  export type USERFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter, which USERS to fetch.
     */
    where?: USERWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of USERS to fetch.
     */
    orderBy?: USEROrderByWithRelationAndSearchRelevanceInput | USEROrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing USERS.
     */
    cursor?: USERWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` USERS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` USERS.
     */
    skip?: number
    distinct?: USERScalarFieldEnum | USERScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER create
   */
  export type USERCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to create a USER.
     */
    data: XOR<USERCreateInput, USERUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER createMany
   */
  export type USERCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many USERS.
     */
    data: USERCreateManyInput | USERCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * USER update
   */
  export type USERUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The data needed to update a USER.
     */
    data: XOR<USERUpdateInput, USERUncheckedUpdateInput>
    /**
     * Choose, which USER to update.
     */
    where: USERWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER updateMany
   */
  export type USERUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update USERS.
     */
    data: XOR<USERUpdateManyMutationInput, USERUncheckedUpdateManyInput>
    /**
     * Filter which USERS to update
     */
    where?: USERWhereInput
  }


  /**
   * USER upsert
   */
  export type USERUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * The filter to search for the USER to update in case it exists.
     */
    where: USERWhereUniqueInput
    /**
     * In case the USER found by the `where` argument doesn't exist, create a new USER with this data.
     */
    create: XOR<USERCreateInput, USERUncheckedCreateInput>
    /**
     * In case the USER was found with the provided `where` argument, update it with this data.
     */
    update: XOR<USERUpdateInput, USERUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER delete
   */
  export type USERDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
    /**
     * Filter which USER to delete.
     */
    where: USERWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * USER deleteMany
   */
  export type USERDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which USERS to delete
     */
    where?: USERWhereInput
  }


  /**
   * USER.PRODUCT
   */
  export type USER$PRODUCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    where?: PRODUCTWhereInput
    orderBy?: PRODUCTOrderByWithRelationAndSearchRelevanceInput | PRODUCTOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PRODUCTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
  }


  /**
   * USER.PRODUCT_FAVORITE
   */
  export type USER$PRODUCT_FAVORITEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    where?: PRODUCT_FAVORITEWhereInput
    orderBy?: PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PRODUCT_FAVORITEWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRODUCT_FAVORITEScalarFieldEnum | PRODUCT_FAVORITEScalarFieldEnum[]
  }


  /**
   * USER without action
   */
  export type USERDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the USER
     */
    select?: USERSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: USERInclude<ExtArgs> | null
  }



  /**
   * Model PRODUCT
   */

  export type AggregatePRODUCT = {
    _count: PRODUCTCountAggregateOutputType | null
    _avg: PRODUCTAvgAggregateOutputType | null
    _sum: PRODUCTSumAggregateOutputType | null
    _min: PRODUCTMinAggregateOutputType | null
    _max: PRODUCTMaxAggregateOutputType | null
  }

  export type PRODUCTAvgAggregateOutputType = {
    id: number | null
    amount: number | null
    category_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type PRODUCTSumAggregateOutputType = {
    id: number | null
    amount: number | null
    category_id: number | null
    status: number | null
    created_by: number | null
    updated_by: number | null
  }

  export type PRODUCTMinAggregateOutputType = {
    id: number | null
    uuid: string | null
    product_name: string | null
    description: string | null
    amount: number | null
    category_id: number | null
    status: number | null
    user_uuid: string | null
    created_by: number | null
    created_date: Date | null
    updated_by: number | null
    updated_date: Date | null
  }

  export type PRODUCTMaxAggregateOutputType = {
    id: number | null
    uuid: string | null
    product_name: string | null
    description: string | null
    amount: number | null
    category_id: number | null
    status: number | null
    user_uuid: string | null
    created_by: number | null
    created_date: Date | null
    updated_by: number | null
    updated_date: Date | null
  }

  export type PRODUCTCountAggregateOutputType = {
    id: number
    uuid: number
    product_name: number
    description: number
    amount: number
    category_id: number
    status: number
    user_uuid: number
    created_by: number
    created_date: number
    updated_by: number
    updated_date: number
    _all: number
  }


  export type PRODUCTAvgAggregateInputType = {
    id?: true
    amount?: true
    category_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type PRODUCTSumAggregateInputType = {
    id?: true
    amount?: true
    category_id?: true
    status?: true
    created_by?: true
    updated_by?: true
  }

  export type PRODUCTMinAggregateInputType = {
    id?: true
    uuid?: true
    product_name?: true
    description?: true
    amount?: true
    category_id?: true
    status?: true
    user_uuid?: true
    created_by?: true
    created_date?: true
    updated_by?: true
    updated_date?: true
  }

  export type PRODUCTMaxAggregateInputType = {
    id?: true
    uuid?: true
    product_name?: true
    description?: true
    amount?: true
    category_id?: true
    status?: true
    user_uuid?: true
    created_by?: true
    created_date?: true
    updated_by?: true
    updated_date?: true
  }

  export type PRODUCTCountAggregateInputType = {
    id?: true
    uuid?: true
    product_name?: true
    description?: true
    amount?: true
    category_id?: true
    status?: true
    user_uuid?: true
    created_by?: true
    created_date?: true
    updated_by?: true
    updated_date?: true
    _all?: true
  }

  export type PRODUCTAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT to aggregate.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationAndSearchRelevanceInput | PRODUCTOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRODUCTS
    **/
    _count?: true | PRODUCTCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRODUCTAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRODUCTSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRODUCTMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRODUCTMaxAggregateInputType
  }

  export type GetPRODUCTAggregateType<T extends PRODUCTAggregateArgs> = {
        [P in keyof T & keyof AggregatePRODUCT]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRODUCT[P]>
      : GetScalarType<T[P], AggregatePRODUCT[P]>
  }




  export type PRODUCTGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCTWhereInput
    orderBy?: PRODUCTOrderByWithAggregationInput | PRODUCTOrderByWithAggregationInput[]
    by: PRODUCTScalarFieldEnum[] | PRODUCTScalarFieldEnum
    having?: PRODUCTScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRODUCTCountAggregateInputType | true
    _avg?: PRODUCTAvgAggregateInputType
    _sum?: PRODUCTSumAggregateInputType
    _min?: PRODUCTMinAggregateInputType
    _max?: PRODUCTMaxAggregateInputType
  }

  export type PRODUCTGroupByOutputType = {
    id: number
    uuid: string
    product_name: string
    description: string | null
    amount: number
    category_id: number | null
    status: number
    user_uuid: string
    created_by: number | null
    created_date: Date | null
    updated_by: number | null
    updated_date: Date | null
    _count: PRODUCTCountAggregateOutputType | null
    _avg: PRODUCTAvgAggregateOutputType | null
    _sum: PRODUCTSumAggregateOutputType | null
    _min: PRODUCTMinAggregateOutputType | null
    _max: PRODUCTMaxAggregateOutputType | null
  }

  type GetPRODUCTGroupByPayload<T extends PRODUCTGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRODUCTGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRODUCTGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRODUCTGroupByOutputType[P]>
            : GetScalarType<T[P], PRODUCTGroupByOutputType[P]>
        }
      >
    >


  export type PRODUCTSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    uuid?: boolean
    product_name?: boolean
    description?: boolean
    amount?: boolean
    category_id?: boolean
    status?: boolean
    user_uuid?: boolean
    created_by?: boolean
    created_date?: boolean
    updated_by?: boolean
    updated_date?: boolean
    PRODUCT_CATEGORY?: boolean | PRODUCT$PRODUCT_CATEGORYArgs<ExtArgs>
    USER?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRODUCT"]>

  export type PRODUCTSelectScalar = {
    id?: boolean
    uuid?: boolean
    product_name?: boolean
    description?: boolean
    amount?: boolean
    category_id?: boolean
    status?: boolean
    user_uuid?: boolean
    created_by?: boolean
    created_date?: boolean
    updated_by?: boolean
    updated_date?: boolean
  }

  export type PRODUCTInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PRODUCT_CATEGORY?: boolean | PRODUCT$PRODUCT_CATEGORYArgs<ExtArgs>
    USER?: boolean | USERDefaultArgs<ExtArgs>
  }


  export type $PRODUCTPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRODUCT"
    objects: {
      PRODUCT_CATEGORY: Prisma.$PRODUCT_CATEGORYPayload<ExtArgs> | null
      USER: Prisma.$USERPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      uuid: string
      product_name: string
      description: string | null
      amount: number
      category_id: number | null
      status: number
      user_uuid: string
      created_by: number | null
      created_date: Date | null
      updated_by: number | null
      updated_date: Date | null
    }, ExtArgs["result"]["pRODUCT"]>
    composites: {}
  }


  type PRODUCTGetPayload<S extends boolean | null | undefined | PRODUCTDefaultArgs> = $Result.GetResult<Prisma.$PRODUCTPayload, S>

  type PRODUCTCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PRODUCTFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PRODUCTCountAggregateInputType | true
    }

  export interface PRODUCTDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRODUCT'], meta: { name: 'PRODUCT' } }
    /**
     * Find zero or one PRODUCT that matches the filter.
     * @param {PRODUCTFindUniqueArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRODUCTFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCTFindUniqueArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PRODUCT that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRODUCTFindUniqueOrThrowArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRODUCTFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCTFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PRODUCT that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTFindFirstArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRODUCTFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCTFindFirstArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PRODUCT that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTFindFirstOrThrowArgs} args - Arguments to find a PRODUCT
     * @example
     * // Get one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRODUCTFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCTFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PRODUCTS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRODUCTS
     * const pRODUCTS = await prisma.pRODUCT.findMany()
     * 
     * // Get first 10 PRODUCTS
     * const pRODUCTS = await prisma.pRODUCT.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRODUCTWithIdOnly = await prisma.pRODUCT.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PRODUCTFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCTFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PRODUCT.
     * @param {PRODUCTCreateArgs} args - Arguments to create a PRODUCT.
     * @example
     * // Create one PRODUCT
     * const PRODUCT = await prisma.pRODUCT.create({
     *   data: {
     *     // ... data to create a PRODUCT
     *   }
     * })
     * 
    **/
    create<T extends PRODUCTCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCTCreateArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PRODUCTS.
     *     @param {PRODUCTCreateManyArgs} args - Arguments to create many PRODUCTS.
     *     @example
     *     // Create many PRODUCTS
     *     const pRODUCT = await prisma.pRODUCT.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRODUCTCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCTCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRODUCT.
     * @param {PRODUCTDeleteArgs} args - Arguments to delete one PRODUCT.
     * @example
     * // Delete one PRODUCT
     * const PRODUCT = await prisma.pRODUCT.delete({
     *   where: {
     *     // ... filter to delete one PRODUCT
     *   }
     * })
     * 
    **/
    delete<T extends PRODUCTDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCTDeleteArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PRODUCT.
     * @param {PRODUCTUpdateArgs} args - Arguments to update one PRODUCT.
     * @example
     * // Update one PRODUCT
     * const pRODUCT = await prisma.pRODUCT.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRODUCTUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCTUpdateArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PRODUCTS.
     * @param {PRODUCTDeleteManyArgs} args - Arguments to filter PRODUCTS to delete.
     * @example
     * // Delete a few PRODUCTS
     * const { count } = await prisma.pRODUCT.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRODUCTDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCTDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRODUCTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRODUCTS
     * const pRODUCT = await prisma.pRODUCT.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRODUCTUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCTUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRODUCT.
     * @param {PRODUCTUpsertArgs} args - Arguments to update or create a PRODUCT.
     * @example
     * // Update or create a PRODUCT
     * const pRODUCT = await prisma.pRODUCT.upsert({
     *   create: {
     *     // ... data to create a PRODUCT
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRODUCT we want to update
     *   }
     * })
    **/
    upsert<T extends PRODUCTUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCTUpsertArgs<ExtArgs>>
    ): Prisma__PRODUCTClient<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PRODUCTS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTCountArgs} args - Arguments to filter PRODUCTS to count.
     * @example
     * // Count the number of PRODUCTS
     * const count = await prisma.pRODUCT.count({
     *   where: {
     *     // ... the filter for the PRODUCTS we want to count
     *   }
     * })
    **/
    count<T extends PRODUCTCountArgs>(
      args?: Subset<T, PRODUCTCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRODUCTCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRODUCT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PRODUCTAggregateArgs>(args: Subset<T, PRODUCTAggregateArgs>): Prisma.PrismaPromise<GetPRODUCTAggregateType<T>>

    /**
     * Group by PRODUCT.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCTGroupByArgs} args - Group by arguments.
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
      T extends PRODUCTGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRODUCTGroupByArgs['orderBy'] }
        : { orderBy?: PRODUCTGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PRODUCTGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRODUCTGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRODUCT model
   */
  readonly fields: PRODUCTFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRODUCT.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRODUCTClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PRODUCT_CATEGORY<T extends PRODUCT$PRODUCT_CATEGORYArgs<ExtArgs> = {}>(args?: Subset<T, PRODUCT$PRODUCT_CATEGORYArgs<ExtArgs>>): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'findUniqueOrThrow'> | null, null, ExtArgs>;

    USER<T extends USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERDefaultArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PRODUCT model
   */ 
  interface PRODUCTFieldRefs {
    readonly id: FieldRef<"PRODUCT", 'Int'>
    readonly uuid: FieldRef<"PRODUCT", 'String'>
    readonly product_name: FieldRef<"PRODUCT", 'String'>
    readonly description: FieldRef<"PRODUCT", 'String'>
    readonly amount: FieldRef<"PRODUCT", 'Int'>
    readonly category_id: FieldRef<"PRODUCT", 'Int'>
    readonly status: FieldRef<"PRODUCT", 'Int'>
    readonly user_uuid: FieldRef<"PRODUCT", 'String'>
    readonly created_by: FieldRef<"PRODUCT", 'Int'>
    readonly created_date: FieldRef<"PRODUCT", 'DateTime'>
    readonly updated_by: FieldRef<"PRODUCT", 'Int'>
    readonly updated_date: FieldRef<"PRODUCT", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PRODUCT findUnique
   */
  export type PRODUCTFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where: PRODUCTWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT findUniqueOrThrow
   */
  export type PRODUCTFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where: PRODUCTWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT findFirst
   */
  export type PRODUCTFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationAndSearchRelevanceInput | PRODUCTOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCTS.
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCTS.
     */
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT findFirstOrThrow
   */
  export type PRODUCTFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT to fetch.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationAndSearchRelevanceInput | PRODUCTOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCTS.
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCTS.
     */
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT findMany
   */
  export type PRODUCTFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCTS to fetch.
     */
    where?: PRODUCTWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCTS to fetch.
     */
    orderBy?: PRODUCTOrderByWithRelationAndSearchRelevanceInput | PRODUCTOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRODUCTS.
     */
    cursor?: PRODUCTWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCTS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCTS.
     */
    skip?: number
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT create
   */
  export type PRODUCTCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * The data needed to create a PRODUCT.
     */
    data: XOR<PRODUCTCreateInput, PRODUCTUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT createMany
   */
  export type PRODUCTCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRODUCTS.
     */
    data: PRODUCTCreateManyInput | PRODUCTCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRODUCT update
   */
  export type PRODUCTUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * The data needed to update a PRODUCT.
     */
    data: XOR<PRODUCTUpdateInput, PRODUCTUncheckedUpdateInput>
    /**
     * Choose, which PRODUCT to update.
     */
    where: PRODUCTWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT updateMany
   */
  export type PRODUCTUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRODUCTS.
     */
    data: XOR<PRODUCTUpdateManyMutationInput, PRODUCTUncheckedUpdateManyInput>
    /**
     * Filter which PRODUCTS to update
     */
    where?: PRODUCTWhereInput
  }


  /**
   * PRODUCT upsert
   */
  export type PRODUCTUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * The filter to search for the PRODUCT to update in case it exists.
     */
    where: PRODUCTWhereUniqueInput
    /**
     * In case the PRODUCT found by the `where` argument doesn't exist, create a new PRODUCT with this data.
     */
    create: XOR<PRODUCTCreateInput, PRODUCTUncheckedCreateInput>
    /**
     * In case the PRODUCT was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRODUCTUpdateInput, PRODUCTUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT delete
   */
  export type PRODUCTDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    /**
     * Filter which PRODUCT to delete.
     */
    where: PRODUCTWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT deleteMany
   */
  export type PRODUCTDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCTS to delete
     */
    where?: PRODUCTWhereInput
  }


  /**
   * PRODUCT.PRODUCT_CATEGORY
   */
  export type PRODUCT$PRODUCT_CATEGORYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    where?: PRODUCT_CATEGORYWhereInput
  }


  /**
   * PRODUCT without action
   */
  export type PRODUCTDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
  }



  /**
   * Model PRODUCT_FAVORITE
   */

  export type AggregatePRODUCT_FAVORITE = {
    _count: PRODUCT_FAVORITECountAggregateOutputType | null
    _avg: PRODUCT_FAVORITEAvgAggregateOutputType | null
    _sum: PRODUCT_FAVORITESumAggregateOutputType | null
    _min: PRODUCT_FAVORITEMinAggregateOutputType | null
    _max: PRODUCT_FAVORITEMaxAggregateOutputType | null
  }

  export type PRODUCT_FAVORITEAvgAggregateOutputType = {
    id: number | null
    favorite: number | null
    user_id: number | null
    created_by: number | null
  }

  export type PRODUCT_FAVORITESumAggregateOutputType = {
    id: number | null
    favorite: number | null
    user_id: number | null
    created_by: number | null
  }

  export type PRODUCT_FAVORITEMinAggregateOutputType = {
    id: number | null
    favorite: number | null
    user_id: number | null
    created_by: number | null
    created_date: Date | null
  }

  export type PRODUCT_FAVORITEMaxAggregateOutputType = {
    id: number | null
    favorite: number | null
    user_id: number | null
    created_by: number | null
    created_date: Date | null
  }

  export type PRODUCT_FAVORITECountAggregateOutputType = {
    id: number
    favorite: number
    user_id: number
    created_by: number
    created_date: number
    _all: number
  }


  export type PRODUCT_FAVORITEAvgAggregateInputType = {
    id?: true
    favorite?: true
    user_id?: true
    created_by?: true
  }

  export type PRODUCT_FAVORITESumAggregateInputType = {
    id?: true
    favorite?: true
    user_id?: true
    created_by?: true
  }

  export type PRODUCT_FAVORITEMinAggregateInputType = {
    id?: true
    favorite?: true
    user_id?: true
    created_by?: true
    created_date?: true
  }

  export type PRODUCT_FAVORITEMaxAggregateInputType = {
    id?: true
    favorite?: true
    user_id?: true
    created_by?: true
    created_date?: true
  }

  export type PRODUCT_FAVORITECountAggregateInputType = {
    id?: true
    favorite?: true
    user_id?: true
    created_by?: true
    created_date?: true
    _all?: true
  }

  export type PRODUCT_FAVORITEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT_FAVORITE to aggregate.
     */
    where?: PRODUCT_FAVORITEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_FAVORITES to fetch.
     */
    orderBy?: PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRODUCT_FAVORITEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_FAVORITES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_FAVORITES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRODUCT_FAVORITES
    **/
    _count?: true | PRODUCT_FAVORITECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRODUCT_FAVORITEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRODUCT_FAVORITESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRODUCT_FAVORITEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRODUCT_FAVORITEMaxAggregateInputType
  }

  export type GetPRODUCT_FAVORITEAggregateType<T extends PRODUCT_FAVORITEAggregateArgs> = {
        [P in keyof T & keyof AggregatePRODUCT_FAVORITE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRODUCT_FAVORITE[P]>
      : GetScalarType<T[P], AggregatePRODUCT_FAVORITE[P]>
  }




  export type PRODUCT_FAVORITEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCT_FAVORITEWhereInput
    orderBy?: PRODUCT_FAVORITEOrderByWithAggregationInput | PRODUCT_FAVORITEOrderByWithAggregationInput[]
    by: PRODUCT_FAVORITEScalarFieldEnum[] | PRODUCT_FAVORITEScalarFieldEnum
    having?: PRODUCT_FAVORITEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRODUCT_FAVORITECountAggregateInputType | true
    _avg?: PRODUCT_FAVORITEAvgAggregateInputType
    _sum?: PRODUCT_FAVORITESumAggregateInputType
    _min?: PRODUCT_FAVORITEMinAggregateInputType
    _max?: PRODUCT_FAVORITEMaxAggregateInputType
  }

  export type PRODUCT_FAVORITEGroupByOutputType = {
    id: number
    favorite: number
    user_id: number
    created_by: number
    created_date: Date | null
    _count: PRODUCT_FAVORITECountAggregateOutputType | null
    _avg: PRODUCT_FAVORITEAvgAggregateOutputType | null
    _sum: PRODUCT_FAVORITESumAggregateOutputType | null
    _min: PRODUCT_FAVORITEMinAggregateOutputType | null
    _max: PRODUCT_FAVORITEMaxAggregateOutputType | null
  }

  type GetPRODUCT_FAVORITEGroupByPayload<T extends PRODUCT_FAVORITEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRODUCT_FAVORITEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRODUCT_FAVORITEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRODUCT_FAVORITEGroupByOutputType[P]>
            : GetScalarType<T[P], PRODUCT_FAVORITEGroupByOutputType[P]>
        }
      >
    >


  export type PRODUCT_FAVORITESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    favorite?: boolean
    user_id?: boolean
    created_by?: boolean
    created_date?: boolean
    USER?: boolean | USERDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRODUCT_FAVORITE"]>

  export type PRODUCT_FAVORITESelectScalar = {
    id?: boolean
    favorite?: boolean
    user_id?: boolean
    created_by?: boolean
    created_date?: boolean
  }

  export type PRODUCT_FAVORITEInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    USER?: boolean | USERDefaultArgs<ExtArgs>
  }


  export type $PRODUCT_FAVORITEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRODUCT_FAVORITE"
    objects: {
      USER: Prisma.$USERPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      favorite: number
      user_id: number
      created_by: number
      created_date: Date | null
    }, ExtArgs["result"]["pRODUCT_FAVORITE"]>
    composites: {}
  }


  type PRODUCT_FAVORITEGetPayload<S extends boolean | null | undefined | PRODUCT_FAVORITEDefaultArgs> = $Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload, S>

  type PRODUCT_FAVORITECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PRODUCT_FAVORITEFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PRODUCT_FAVORITECountAggregateInputType | true
    }

  export interface PRODUCT_FAVORITEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRODUCT_FAVORITE'], meta: { name: 'PRODUCT_FAVORITE' } }
    /**
     * Find zero or one PRODUCT_FAVORITE that matches the filter.
     * @param {PRODUCT_FAVORITEFindUniqueArgs} args - Arguments to find a PRODUCT_FAVORITE
     * @example
     * // Get one PRODUCT_FAVORITE
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRODUCT_FAVORITEFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_FAVORITEFindUniqueArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PRODUCT_FAVORITE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRODUCT_FAVORITEFindUniqueOrThrowArgs} args - Arguments to find a PRODUCT_FAVORITE
     * @example
     * // Get one PRODUCT_FAVORITE
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRODUCT_FAVORITEFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_FAVORITEFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PRODUCT_FAVORITE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITEFindFirstArgs} args - Arguments to find a PRODUCT_FAVORITE
     * @example
     * // Get one PRODUCT_FAVORITE
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRODUCT_FAVORITEFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_FAVORITEFindFirstArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PRODUCT_FAVORITE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITEFindFirstOrThrowArgs} args - Arguments to find a PRODUCT_FAVORITE
     * @example
     * // Get one PRODUCT_FAVORITE
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRODUCT_FAVORITEFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_FAVORITEFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PRODUCT_FAVORITES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITEFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRODUCT_FAVORITES
     * const pRODUCT_FAVORITES = await prisma.pRODUCT_FAVORITE.findMany()
     * 
     * // Get first 10 PRODUCT_FAVORITES
     * const pRODUCT_FAVORITES = await prisma.pRODUCT_FAVORITE.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRODUCT_FAVORITEWithIdOnly = await prisma.pRODUCT_FAVORITE.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PRODUCT_FAVORITEFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_FAVORITEFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PRODUCT_FAVORITE.
     * @param {PRODUCT_FAVORITECreateArgs} args - Arguments to create a PRODUCT_FAVORITE.
     * @example
     * // Create one PRODUCT_FAVORITE
     * const PRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.create({
     *   data: {
     *     // ... data to create a PRODUCT_FAVORITE
     *   }
     * })
     * 
    **/
    create<T extends PRODUCT_FAVORITECreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_FAVORITECreateArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PRODUCT_FAVORITES.
     *     @param {PRODUCT_FAVORITECreateManyArgs} args - Arguments to create many PRODUCT_FAVORITES.
     *     @example
     *     // Create many PRODUCT_FAVORITES
     *     const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRODUCT_FAVORITECreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_FAVORITECreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRODUCT_FAVORITE.
     * @param {PRODUCT_FAVORITEDeleteArgs} args - Arguments to delete one PRODUCT_FAVORITE.
     * @example
     * // Delete one PRODUCT_FAVORITE
     * const PRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.delete({
     *   where: {
     *     // ... filter to delete one PRODUCT_FAVORITE
     *   }
     * })
     * 
    **/
    delete<T extends PRODUCT_FAVORITEDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_FAVORITEDeleteArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PRODUCT_FAVORITE.
     * @param {PRODUCT_FAVORITEUpdateArgs} args - Arguments to update one PRODUCT_FAVORITE.
     * @example
     * // Update one PRODUCT_FAVORITE
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRODUCT_FAVORITEUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_FAVORITEUpdateArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PRODUCT_FAVORITES.
     * @param {PRODUCT_FAVORITEDeleteManyArgs} args - Arguments to filter PRODUCT_FAVORITES to delete.
     * @example
     * // Delete a few PRODUCT_FAVORITES
     * const { count } = await prisma.pRODUCT_FAVORITE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRODUCT_FAVORITEDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_FAVORITEDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRODUCT_FAVORITES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRODUCT_FAVORITES
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRODUCT_FAVORITEUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_FAVORITEUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRODUCT_FAVORITE.
     * @param {PRODUCT_FAVORITEUpsertArgs} args - Arguments to update or create a PRODUCT_FAVORITE.
     * @example
     * // Update or create a PRODUCT_FAVORITE
     * const pRODUCT_FAVORITE = await prisma.pRODUCT_FAVORITE.upsert({
     *   create: {
     *     // ... data to create a PRODUCT_FAVORITE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRODUCT_FAVORITE we want to update
     *   }
     * })
    **/
    upsert<T extends PRODUCT_FAVORITEUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_FAVORITEUpsertArgs<ExtArgs>>
    ): Prisma__PRODUCT_FAVORITEClient<$Result.GetResult<Prisma.$PRODUCT_FAVORITEPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PRODUCT_FAVORITES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITECountArgs} args - Arguments to filter PRODUCT_FAVORITES to count.
     * @example
     * // Count the number of PRODUCT_FAVORITES
     * const count = await prisma.pRODUCT_FAVORITE.count({
     *   where: {
     *     // ... the filter for the PRODUCT_FAVORITES we want to count
     *   }
     * })
    **/
    count<T extends PRODUCT_FAVORITECountArgs>(
      args?: Subset<T, PRODUCT_FAVORITECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRODUCT_FAVORITECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRODUCT_FAVORITE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PRODUCT_FAVORITEAggregateArgs>(args: Subset<T, PRODUCT_FAVORITEAggregateArgs>): Prisma.PrismaPromise<GetPRODUCT_FAVORITEAggregateType<T>>

    /**
     * Group by PRODUCT_FAVORITE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_FAVORITEGroupByArgs} args - Group by arguments.
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
      T extends PRODUCT_FAVORITEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRODUCT_FAVORITEGroupByArgs['orderBy'] }
        : { orderBy?: PRODUCT_FAVORITEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PRODUCT_FAVORITEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRODUCT_FAVORITEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRODUCT_FAVORITE model
   */
  readonly fields: PRODUCT_FAVORITEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRODUCT_FAVORITE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRODUCT_FAVORITEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    USER<T extends USERDefaultArgs<ExtArgs> = {}>(args?: Subset<T, USERDefaultArgs<ExtArgs>>): Prisma__USERClient<$Result.GetResult<Prisma.$USERPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PRODUCT_FAVORITE model
   */ 
  interface PRODUCT_FAVORITEFieldRefs {
    readonly id: FieldRef<"PRODUCT_FAVORITE", 'Int'>
    readonly favorite: FieldRef<"PRODUCT_FAVORITE", 'Int'>
    readonly user_id: FieldRef<"PRODUCT_FAVORITE", 'Int'>
    readonly created_by: FieldRef<"PRODUCT_FAVORITE", 'Int'>
    readonly created_date: FieldRef<"PRODUCT_FAVORITE", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PRODUCT_FAVORITE findUnique
   */
  export type PRODUCT_FAVORITEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_FAVORITE to fetch.
     */
    where: PRODUCT_FAVORITEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE findUniqueOrThrow
   */
  export type PRODUCT_FAVORITEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_FAVORITE to fetch.
     */
    where: PRODUCT_FAVORITEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE findFirst
   */
  export type PRODUCT_FAVORITEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_FAVORITE to fetch.
     */
    where?: PRODUCT_FAVORITEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_FAVORITES to fetch.
     */
    orderBy?: PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCT_FAVORITES.
     */
    cursor?: PRODUCT_FAVORITEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_FAVORITES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_FAVORITES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCT_FAVORITES.
     */
    distinct?: PRODUCT_FAVORITEScalarFieldEnum | PRODUCT_FAVORITEScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE findFirstOrThrow
   */
  export type PRODUCT_FAVORITEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_FAVORITE to fetch.
     */
    where?: PRODUCT_FAVORITEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_FAVORITES to fetch.
     */
    orderBy?: PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCT_FAVORITES.
     */
    cursor?: PRODUCT_FAVORITEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_FAVORITES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_FAVORITES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCT_FAVORITES.
     */
    distinct?: PRODUCT_FAVORITEScalarFieldEnum | PRODUCT_FAVORITEScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE findMany
   */
  export type PRODUCT_FAVORITEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_FAVORITES to fetch.
     */
    where?: PRODUCT_FAVORITEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_FAVORITES to fetch.
     */
    orderBy?: PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRODUCT_FAVORITES.
     */
    cursor?: PRODUCT_FAVORITEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_FAVORITES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_FAVORITES.
     */
    skip?: number
    distinct?: PRODUCT_FAVORITEScalarFieldEnum | PRODUCT_FAVORITEScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE create
   */
  export type PRODUCT_FAVORITECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * The data needed to create a PRODUCT_FAVORITE.
     */
    data: XOR<PRODUCT_FAVORITECreateInput, PRODUCT_FAVORITEUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE createMany
   */
  export type PRODUCT_FAVORITECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRODUCT_FAVORITES.
     */
    data: PRODUCT_FAVORITECreateManyInput | PRODUCT_FAVORITECreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRODUCT_FAVORITE update
   */
  export type PRODUCT_FAVORITEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * The data needed to update a PRODUCT_FAVORITE.
     */
    data: XOR<PRODUCT_FAVORITEUpdateInput, PRODUCT_FAVORITEUncheckedUpdateInput>
    /**
     * Choose, which PRODUCT_FAVORITE to update.
     */
    where: PRODUCT_FAVORITEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE updateMany
   */
  export type PRODUCT_FAVORITEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRODUCT_FAVORITES.
     */
    data: XOR<PRODUCT_FAVORITEUpdateManyMutationInput, PRODUCT_FAVORITEUncheckedUpdateManyInput>
    /**
     * Filter which PRODUCT_FAVORITES to update
     */
    where?: PRODUCT_FAVORITEWhereInput
  }


  /**
   * PRODUCT_FAVORITE upsert
   */
  export type PRODUCT_FAVORITEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * The filter to search for the PRODUCT_FAVORITE to update in case it exists.
     */
    where: PRODUCT_FAVORITEWhereUniqueInput
    /**
     * In case the PRODUCT_FAVORITE found by the `where` argument doesn't exist, create a new PRODUCT_FAVORITE with this data.
     */
    create: XOR<PRODUCT_FAVORITECreateInput, PRODUCT_FAVORITEUncheckedCreateInput>
    /**
     * In case the PRODUCT_FAVORITE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRODUCT_FAVORITEUpdateInput, PRODUCT_FAVORITEUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE delete
   */
  export type PRODUCT_FAVORITEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
    /**
     * Filter which PRODUCT_FAVORITE to delete.
     */
    where: PRODUCT_FAVORITEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_FAVORITE deleteMany
   */
  export type PRODUCT_FAVORITEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT_FAVORITES to delete
     */
    where?: PRODUCT_FAVORITEWhereInput
  }


  /**
   * PRODUCT_FAVORITE without action
   */
  export type PRODUCT_FAVORITEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_FAVORITE
     */
    select?: PRODUCT_FAVORITESelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_FAVORITEInclude<ExtArgs> | null
  }



  /**
   * Model PRODUCT_LIKE
   */

  export type AggregatePRODUCT_LIKE = {
    _count: PRODUCT_LIKECountAggregateOutputType | null
    _avg: PRODUCT_LIKEAvgAggregateOutputType | null
    _sum: PRODUCT_LIKESumAggregateOutputType | null
    _min: PRODUCT_LIKEMinAggregateOutputType | null
    _max: PRODUCT_LIKEMaxAggregateOutputType | null
  }

  export type PRODUCT_LIKEAvgAggregateOutputType = {
    id: number | null
    like: number | null
    user_id: number | null
    created_by: number | null
  }

  export type PRODUCT_LIKESumAggregateOutputType = {
    id: number | null
    like: number | null
    user_id: number | null
    created_by: number | null
  }

  export type PRODUCT_LIKEMinAggregateOutputType = {
    id: number | null
    like: number | null
    user_id: number | null
    created_by: number | null
    created_date: Date | null
  }

  export type PRODUCT_LIKEMaxAggregateOutputType = {
    id: number | null
    like: number | null
    user_id: number | null
    created_by: number | null
    created_date: Date | null
  }

  export type PRODUCT_LIKECountAggregateOutputType = {
    id: number
    like: number
    user_id: number
    created_by: number
    created_date: number
    _all: number
  }


  export type PRODUCT_LIKEAvgAggregateInputType = {
    id?: true
    like?: true
    user_id?: true
    created_by?: true
  }

  export type PRODUCT_LIKESumAggregateInputType = {
    id?: true
    like?: true
    user_id?: true
    created_by?: true
  }

  export type PRODUCT_LIKEMinAggregateInputType = {
    id?: true
    like?: true
    user_id?: true
    created_by?: true
    created_date?: true
  }

  export type PRODUCT_LIKEMaxAggregateInputType = {
    id?: true
    like?: true
    user_id?: true
    created_by?: true
    created_date?: true
  }

  export type PRODUCT_LIKECountAggregateInputType = {
    id?: true
    like?: true
    user_id?: true
    created_by?: true
    created_date?: true
    _all?: true
  }

  export type PRODUCT_LIKEAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT_LIKE to aggregate.
     */
    where?: PRODUCT_LIKEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_LIKES to fetch.
     */
    orderBy?: PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRODUCT_LIKEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_LIKES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_LIKES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRODUCT_LIKES
    **/
    _count?: true | PRODUCT_LIKECountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRODUCT_LIKEAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRODUCT_LIKESumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRODUCT_LIKEMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRODUCT_LIKEMaxAggregateInputType
  }

  export type GetPRODUCT_LIKEAggregateType<T extends PRODUCT_LIKEAggregateArgs> = {
        [P in keyof T & keyof AggregatePRODUCT_LIKE]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRODUCT_LIKE[P]>
      : GetScalarType<T[P], AggregatePRODUCT_LIKE[P]>
  }




  export type PRODUCT_LIKEGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCT_LIKEWhereInput
    orderBy?: PRODUCT_LIKEOrderByWithAggregationInput | PRODUCT_LIKEOrderByWithAggregationInput[]
    by: PRODUCT_LIKEScalarFieldEnum[] | PRODUCT_LIKEScalarFieldEnum
    having?: PRODUCT_LIKEScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRODUCT_LIKECountAggregateInputType | true
    _avg?: PRODUCT_LIKEAvgAggregateInputType
    _sum?: PRODUCT_LIKESumAggregateInputType
    _min?: PRODUCT_LIKEMinAggregateInputType
    _max?: PRODUCT_LIKEMaxAggregateInputType
  }

  export type PRODUCT_LIKEGroupByOutputType = {
    id: number
    like: number
    user_id: number
    created_by: number | null
    created_date: Date | null
    _count: PRODUCT_LIKECountAggregateOutputType | null
    _avg: PRODUCT_LIKEAvgAggregateOutputType | null
    _sum: PRODUCT_LIKESumAggregateOutputType | null
    _min: PRODUCT_LIKEMinAggregateOutputType | null
    _max: PRODUCT_LIKEMaxAggregateOutputType | null
  }

  type GetPRODUCT_LIKEGroupByPayload<T extends PRODUCT_LIKEGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRODUCT_LIKEGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRODUCT_LIKEGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRODUCT_LIKEGroupByOutputType[P]>
            : GetScalarType<T[P], PRODUCT_LIKEGroupByOutputType[P]>
        }
      >
    >


  export type PRODUCT_LIKESelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    like?: boolean
    user_id?: boolean
    created_by?: boolean
    created_date?: boolean
  }, ExtArgs["result"]["pRODUCT_LIKE"]>

  export type PRODUCT_LIKESelectScalar = {
    id?: boolean
    like?: boolean
    user_id?: boolean
    created_by?: boolean
    created_date?: boolean
  }


  export type $PRODUCT_LIKEPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRODUCT_LIKE"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      like: number
      user_id: number
      created_by: number | null
      created_date: Date | null
    }, ExtArgs["result"]["pRODUCT_LIKE"]>
    composites: {}
  }


  type PRODUCT_LIKEGetPayload<S extends boolean | null | undefined | PRODUCT_LIKEDefaultArgs> = $Result.GetResult<Prisma.$PRODUCT_LIKEPayload, S>

  type PRODUCT_LIKECountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PRODUCT_LIKEFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PRODUCT_LIKECountAggregateInputType | true
    }

  export interface PRODUCT_LIKEDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRODUCT_LIKE'], meta: { name: 'PRODUCT_LIKE' } }
    /**
     * Find zero or one PRODUCT_LIKE that matches the filter.
     * @param {PRODUCT_LIKEFindUniqueArgs} args - Arguments to find a PRODUCT_LIKE
     * @example
     * // Get one PRODUCT_LIKE
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRODUCT_LIKEFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_LIKEFindUniqueArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PRODUCT_LIKE that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRODUCT_LIKEFindUniqueOrThrowArgs} args - Arguments to find a PRODUCT_LIKE
     * @example
     * // Get one PRODUCT_LIKE
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRODUCT_LIKEFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_LIKEFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PRODUCT_LIKE that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKEFindFirstArgs} args - Arguments to find a PRODUCT_LIKE
     * @example
     * // Get one PRODUCT_LIKE
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRODUCT_LIKEFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_LIKEFindFirstArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PRODUCT_LIKE that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKEFindFirstOrThrowArgs} args - Arguments to find a PRODUCT_LIKE
     * @example
     * // Get one PRODUCT_LIKE
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRODUCT_LIKEFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_LIKEFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PRODUCT_LIKES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKEFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRODUCT_LIKES
     * const pRODUCT_LIKES = await prisma.pRODUCT_LIKE.findMany()
     * 
     * // Get first 10 PRODUCT_LIKES
     * const pRODUCT_LIKES = await prisma.pRODUCT_LIKE.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRODUCT_LIKEWithIdOnly = await prisma.pRODUCT_LIKE.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PRODUCT_LIKEFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_LIKEFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PRODUCT_LIKE.
     * @param {PRODUCT_LIKECreateArgs} args - Arguments to create a PRODUCT_LIKE.
     * @example
     * // Create one PRODUCT_LIKE
     * const PRODUCT_LIKE = await prisma.pRODUCT_LIKE.create({
     *   data: {
     *     // ... data to create a PRODUCT_LIKE
     *   }
     * })
     * 
    **/
    create<T extends PRODUCT_LIKECreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_LIKECreateArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PRODUCT_LIKES.
     *     @param {PRODUCT_LIKECreateManyArgs} args - Arguments to create many PRODUCT_LIKES.
     *     @example
     *     // Create many PRODUCT_LIKES
     *     const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRODUCT_LIKECreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_LIKECreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRODUCT_LIKE.
     * @param {PRODUCT_LIKEDeleteArgs} args - Arguments to delete one PRODUCT_LIKE.
     * @example
     * // Delete one PRODUCT_LIKE
     * const PRODUCT_LIKE = await prisma.pRODUCT_LIKE.delete({
     *   where: {
     *     // ... filter to delete one PRODUCT_LIKE
     *   }
     * })
     * 
    **/
    delete<T extends PRODUCT_LIKEDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_LIKEDeleteArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PRODUCT_LIKE.
     * @param {PRODUCT_LIKEUpdateArgs} args - Arguments to update one PRODUCT_LIKE.
     * @example
     * // Update one PRODUCT_LIKE
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRODUCT_LIKEUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_LIKEUpdateArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PRODUCT_LIKES.
     * @param {PRODUCT_LIKEDeleteManyArgs} args - Arguments to filter PRODUCT_LIKES to delete.
     * @example
     * // Delete a few PRODUCT_LIKES
     * const { count } = await prisma.pRODUCT_LIKE.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRODUCT_LIKEDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_LIKEDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRODUCT_LIKES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKEUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRODUCT_LIKES
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRODUCT_LIKEUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_LIKEUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRODUCT_LIKE.
     * @param {PRODUCT_LIKEUpsertArgs} args - Arguments to update or create a PRODUCT_LIKE.
     * @example
     * // Update or create a PRODUCT_LIKE
     * const pRODUCT_LIKE = await prisma.pRODUCT_LIKE.upsert({
     *   create: {
     *     // ... data to create a PRODUCT_LIKE
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRODUCT_LIKE we want to update
     *   }
     * })
    **/
    upsert<T extends PRODUCT_LIKEUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_LIKEUpsertArgs<ExtArgs>>
    ): Prisma__PRODUCT_LIKEClient<$Result.GetResult<Prisma.$PRODUCT_LIKEPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PRODUCT_LIKES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKECountArgs} args - Arguments to filter PRODUCT_LIKES to count.
     * @example
     * // Count the number of PRODUCT_LIKES
     * const count = await prisma.pRODUCT_LIKE.count({
     *   where: {
     *     // ... the filter for the PRODUCT_LIKES we want to count
     *   }
     * })
    **/
    count<T extends PRODUCT_LIKECountArgs>(
      args?: Subset<T, PRODUCT_LIKECountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRODUCT_LIKECountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRODUCT_LIKE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKEAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PRODUCT_LIKEAggregateArgs>(args: Subset<T, PRODUCT_LIKEAggregateArgs>): Prisma.PrismaPromise<GetPRODUCT_LIKEAggregateType<T>>

    /**
     * Group by PRODUCT_LIKE.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_LIKEGroupByArgs} args - Group by arguments.
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
      T extends PRODUCT_LIKEGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRODUCT_LIKEGroupByArgs['orderBy'] }
        : { orderBy?: PRODUCT_LIKEGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PRODUCT_LIKEGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRODUCT_LIKEGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRODUCT_LIKE model
   */
  readonly fields: PRODUCT_LIKEFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRODUCT_LIKE.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRODUCT_LIKEClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PRODUCT_LIKE model
   */ 
  interface PRODUCT_LIKEFieldRefs {
    readonly id: FieldRef<"PRODUCT_LIKE", 'Int'>
    readonly like: FieldRef<"PRODUCT_LIKE", 'Int'>
    readonly user_id: FieldRef<"PRODUCT_LIKE", 'Int'>
    readonly created_by: FieldRef<"PRODUCT_LIKE", 'Int'>
    readonly created_date: FieldRef<"PRODUCT_LIKE", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PRODUCT_LIKE findUnique
   */
  export type PRODUCT_LIKEFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * Filter, which PRODUCT_LIKE to fetch.
     */
    where: PRODUCT_LIKEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE findUniqueOrThrow
   */
  export type PRODUCT_LIKEFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * Filter, which PRODUCT_LIKE to fetch.
     */
    where: PRODUCT_LIKEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE findFirst
   */
  export type PRODUCT_LIKEFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * Filter, which PRODUCT_LIKE to fetch.
     */
    where?: PRODUCT_LIKEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_LIKES to fetch.
     */
    orderBy?: PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCT_LIKES.
     */
    cursor?: PRODUCT_LIKEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_LIKES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_LIKES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCT_LIKES.
     */
    distinct?: PRODUCT_LIKEScalarFieldEnum | PRODUCT_LIKEScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE findFirstOrThrow
   */
  export type PRODUCT_LIKEFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * Filter, which PRODUCT_LIKE to fetch.
     */
    where?: PRODUCT_LIKEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_LIKES to fetch.
     */
    orderBy?: PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCT_LIKES.
     */
    cursor?: PRODUCT_LIKEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_LIKES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_LIKES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCT_LIKES.
     */
    distinct?: PRODUCT_LIKEScalarFieldEnum | PRODUCT_LIKEScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE findMany
   */
  export type PRODUCT_LIKEFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * Filter, which PRODUCT_LIKES to fetch.
     */
    where?: PRODUCT_LIKEWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_LIKES to fetch.
     */
    orderBy?: PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput | PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRODUCT_LIKES.
     */
    cursor?: PRODUCT_LIKEWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_LIKES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_LIKES.
     */
    skip?: number
    distinct?: PRODUCT_LIKEScalarFieldEnum | PRODUCT_LIKEScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE create
   */
  export type PRODUCT_LIKECreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * The data needed to create a PRODUCT_LIKE.
     */
    data: XOR<PRODUCT_LIKECreateInput, PRODUCT_LIKEUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE createMany
   */
  export type PRODUCT_LIKECreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRODUCT_LIKES.
     */
    data: PRODUCT_LIKECreateManyInput | PRODUCT_LIKECreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRODUCT_LIKE update
   */
  export type PRODUCT_LIKEUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * The data needed to update a PRODUCT_LIKE.
     */
    data: XOR<PRODUCT_LIKEUpdateInput, PRODUCT_LIKEUncheckedUpdateInput>
    /**
     * Choose, which PRODUCT_LIKE to update.
     */
    where: PRODUCT_LIKEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE updateMany
   */
  export type PRODUCT_LIKEUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRODUCT_LIKES.
     */
    data: XOR<PRODUCT_LIKEUpdateManyMutationInput, PRODUCT_LIKEUncheckedUpdateManyInput>
    /**
     * Filter which PRODUCT_LIKES to update
     */
    where?: PRODUCT_LIKEWhereInput
  }


  /**
   * PRODUCT_LIKE upsert
   */
  export type PRODUCT_LIKEUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * The filter to search for the PRODUCT_LIKE to update in case it exists.
     */
    where: PRODUCT_LIKEWhereUniqueInput
    /**
     * In case the PRODUCT_LIKE found by the `where` argument doesn't exist, create a new PRODUCT_LIKE with this data.
     */
    create: XOR<PRODUCT_LIKECreateInput, PRODUCT_LIKEUncheckedCreateInput>
    /**
     * In case the PRODUCT_LIKE was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRODUCT_LIKEUpdateInput, PRODUCT_LIKEUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE delete
   */
  export type PRODUCT_LIKEDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
    /**
     * Filter which PRODUCT_LIKE to delete.
     */
    where: PRODUCT_LIKEWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_LIKE deleteMany
   */
  export type PRODUCT_LIKEDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT_LIKES to delete
     */
    where?: PRODUCT_LIKEWhereInput
  }


  /**
   * PRODUCT_LIKE without action
   */
  export type PRODUCT_LIKEDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_LIKE
     */
    select?: PRODUCT_LIKESelect<ExtArgs> | null
  }



  /**
   * Model PRODUCT_CATEGORY
   */

  export type AggregatePRODUCT_CATEGORY = {
    _count: PRODUCT_CATEGORYCountAggregateOutputType | null
    _avg: PRODUCT_CATEGORYAvgAggregateOutputType | null
    _sum: PRODUCT_CATEGORYSumAggregateOutputType | null
    _min: PRODUCT_CATEGORYMinAggregateOutputType | null
    _max: PRODUCT_CATEGORYMaxAggregateOutputType | null
  }

  export type PRODUCT_CATEGORYAvgAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type PRODUCT_CATEGORYSumAggregateOutputType = {
    id: number | null
    created_by: number | null
  }

  export type PRODUCT_CATEGORYMinAggregateOutputType = {
    id: number | null
    name: string | null
    created_by: number | null
    created_date: Date | null
  }

  export type PRODUCT_CATEGORYMaxAggregateOutputType = {
    id: number | null
    name: string | null
    created_by: number | null
    created_date: Date | null
  }

  export type PRODUCT_CATEGORYCountAggregateOutputType = {
    id: number
    name: number
    created_by: number
    created_date: number
    _all: number
  }


  export type PRODUCT_CATEGORYAvgAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type PRODUCT_CATEGORYSumAggregateInputType = {
    id?: true
    created_by?: true
  }

  export type PRODUCT_CATEGORYMinAggregateInputType = {
    id?: true
    name?: true
    created_by?: true
    created_date?: true
  }

  export type PRODUCT_CATEGORYMaxAggregateInputType = {
    id?: true
    name?: true
    created_by?: true
    created_date?: true
  }

  export type PRODUCT_CATEGORYCountAggregateInputType = {
    id?: true
    name?: true
    created_by?: true
    created_date?: true
    _all?: true
  }

  export type PRODUCT_CATEGORYAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT_CATEGORY to aggregate.
     */
    where?: PRODUCT_CATEGORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_CATEGORIES to fetch.
     */
    orderBy?: PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput | PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PRODUCT_CATEGORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_CATEGORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_CATEGORIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PRODUCT_CATEGORIES
    **/
    _count?: true | PRODUCT_CATEGORYCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PRODUCT_CATEGORYAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PRODUCT_CATEGORYSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PRODUCT_CATEGORYMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PRODUCT_CATEGORYMaxAggregateInputType
  }

  export type GetPRODUCT_CATEGORYAggregateType<T extends PRODUCT_CATEGORYAggregateArgs> = {
        [P in keyof T & keyof AggregatePRODUCT_CATEGORY]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePRODUCT_CATEGORY[P]>
      : GetScalarType<T[P], AggregatePRODUCT_CATEGORY[P]>
  }




  export type PRODUCT_CATEGORYGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PRODUCT_CATEGORYWhereInput
    orderBy?: PRODUCT_CATEGORYOrderByWithAggregationInput | PRODUCT_CATEGORYOrderByWithAggregationInput[]
    by: PRODUCT_CATEGORYScalarFieldEnum[] | PRODUCT_CATEGORYScalarFieldEnum
    having?: PRODUCT_CATEGORYScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PRODUCT_CATEGORYCountAggregateInputType | true
    _avg?: PRODUCT_CATEGORYAvgAggregateInputType
    _sum?: PRODUCT_CATEGORYSumAggregateInputType
    _min?: PRODUCT_CATEGORYMinAggregateInputType
    _max?: PRODUCT_CATEGORYMaxAggregateInputType
  }

  export type PRODUCT_CATEGORYGroupByOutputType = {
    id: number
    name: string | null
    created_by: number | null
    created_date: Date | null
    _count: PRODUCT_CATEGORYCountAggregateOutputType | null
    _avg: PRODUCT_CATEGORYAvgAggregateOutputType | null
    _sum: PRODUCT_CATEGORYSumAggregateOutputType | null
    _min: PRODUCT_CATEGORYMinAggregateOutputType | null
    _max: PRODUCT_CATEGORYMaxAggregateOutputType | null
  }

  type GetPRODUCT_CATEGORYGroupByPayload<T extends PRODUCT_CATEGORYGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PRODUCT_CATEGORYGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PRODUCT_CATEGORYGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PRODUCT_CATEGORYGroupByOutputType[P]>
            : GetScalarType<T[P], PRODUCT_CATEGORYGroupByOutputType[P]>
        }
      >
    >


  export type PRODUCT_CATEGORYSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    created_by?: boolean
    created_date?: boolean
    PRODUCT?: boolean | PRODUCT_CATEGORY$PRODUCTArgs<ExtArgs>
    _count?: boolean | PRODUCT_CATEGORYCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pRODUCT_CATEGORY"]>

  export type PRODUCT_CATEGORYSelectScalar = {
    id?: boolean
    name?: boolean
    created_by?: boolean
    created_date?: boolean
  }

  export type PRODUCT_CATEGORYInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    PRODUCT?: boolean | PRODUCT_CATEGORY$PRODUCTArgs<ExtArgs>
    _count?: boolean | PRODUCT_CATEGORYCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PRODUCT_CATEGORYPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PRODUCT_CATEGORY"
    objects: {
      PRODUCT: Prisma.$PRODUCTPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      created_by: number | null
      created_date: Date | null
    }, ExtArgs["result"]["pRODUCT_CATEGORY"]>
    composites: {}
  }


  type PRODUCT_CATEGORYGetPayload<S extends boolean | null | undefined | PRODUCT_CATEGORYDefaultArgs> = $Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload, S>

  type PRODUCT_CATEGORYCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PRODUCT_CATEGORYFindManyArgs, 'select' | 'include' | 'distinct' | 'relationLoadStrategy'> & {
      select?: PRODUCT_CATEGORYCountAggregateInputType | true
    }

  export interface PRODUCT_CATEGORYDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PRODUCT_CATEGORY'], meta: { name: 'PRODUCT_CATEGORY' } }
    /**
     * Find zero or one PRODUCT_CATEGORY that matches the filter.
     * @param {PRODUCT_CATEGORYFindUniqueArgs} args - Arguments to find a PRODUCT_CATEGORY
     * @example
     * // Get one PRODUCT_CATEGORY
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PRODUCT_CATEGORYFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_CATEGORYFindUniqueArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PRODUCT_CATEGORY that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PRODUCT_CATEGORYFindUniqueOrThrowArgs} args - Arguments to find a PRODUCT_CATEGORY
     * @example
     * // Get one PRODUCT_CATEGORY
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PRODUCT_CATEGORYFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_CATEGORYFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PRODUCT_CATEGORY that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYFindFirstArgs} args - Arguments to find a PRODUCT_CATEGORY
     * @example
     * // Get one PRODUCT_CATEGORY
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PRODUCT_CATEGORYFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_CATEGORYFindFirstArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PRODUCT_CATEGORY that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYFindFirstOrThrowArgs} args - Arguments to find a PRODUCT_CATEGORY
     * @example
     * // Get one PRODUCT_CATEGORY
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PRODUCT_CATEGORYFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_CATEGORYFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PRODUCT_CATEGORIES that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PRODUCT_CATEGORIES
     * const pRODUCT_CATEGORIES = await prisma.pRODUCT_CATEGORY.findMany()
     * 
     * // Get first 10 PRODUCT_CATEGORIES
     * const pRODUCT_CATEGORIES = await prisma.pRODUCT_CATEGORY.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pRODUCT_CATEGORYWithIdOnly = await prisma.pRODUCT_CATEGORY.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PRODUCT_CATEGORYFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_CATEGORYFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PRODUCT_CATEGORY.
     * @param {PRODUCT_CATEGORYCreateArgs} args - Arguments to create a PRODUCT_CATEGORY.
     * @example
     * // Create one PRODUCT_CATEGORY
     * const PRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.create({
     *   data: {
     *     // ... data to create a PRODUCT_CATEGORY
     *   }
     * })
     * 
    **/
    create<T extends PRODUCT_CATEGORYCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_CATEGORYCreateArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PRODUCT_CATEGORIES.
     *     @param {PRODUCT_CATEGORYCreateManyArgs} args - Arguments to create many PRODUCT_CATEGORIES.
     *     @example
     *     // Create many PRODUCT_CATEGORIES
     *     const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PRODUCT_CATEGORYCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_CATEGORYCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PRODUCT_CATEGORY.
     * @param {PRODUCT_CATEGORYDeleteArgs} args - Arguments to delete one PRODUCT_CATEGORY.
     * @example
     * // Delete one PRODUCT_CATEGORY
     * const PRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.delete({
     *   where: {
     *     // ... filter to delete one PRODUCT_CATEGORY
     *   }
     * })
     * 
    **/
    delete<T extends PRODUCT_CATEGORYDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_CATEGORYDeleteArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PRODUCT_CATEGORY.
     * @param {PRODUCT_CATEGORYUpdateArgs} args - Arguments to update one PRODUCT_CATEGORY.
     * @example
     * // Update one PRODUCT_CATEGORY
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PRODUCT_CATEGORYUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_CATEGORYUpdateArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PRODUCT_CATEGORIES.
     * @param {PRODUCT_CATEGORYDeleteManyArgs} args - Arguments to filter PRODUCT_CATEGORIES to delete.
     * @example
     * // Delete a few PRODUCT_CATEGORIES
     * const { count } = await prisma.pRODUCT_CATEGORY.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PRODUCT_CATEGORYDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PRODUCT_CATEGORYDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PRODUCT_CATEGORIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PRODUCT_CATEGORIES
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PRODUCT_CATEGORYUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_CATEGORYUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PRODUCT_CATEGORY.
     * @param {PRODUCT_CATEGORYUpsertArgs} args - Arguments to update or create a PRODUCT_CATEGORY.
     * @example
     * // Update or create a PRODUCT_CATEGORY
     * const pRODUCT_CATEGORY = await prisma.pRODUCT_CATEGORY.upsert({
     *   create: {
     *     // ... data to create a PRODUCT_CATEGORY
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PRODUCT_CATEGORY we want to update
     *   }
     * })
    **/
    upsert<T extends PRODUCT_CATEGORYUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PRODUCT_CATEGORYUpsertArgs<ExtArgs>>
    ): Prisma__PRODUCT_CATEGORYClient<$Result.GetResult<Prisma.$PRODUCT_CATEGORYPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of PRODUCT_CATEGORIES.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYCountArgs} args - Arguments to filter PRODUCT_CATEGORIES to count.
     * @example
     * // Count the number of PRODUCT_CATEGORIES
     * const count = await prisma.pRODUCT_CATEGORY.count({
     *   where: {
     *     // ... the filter for the PRODUCT_CATEGORIES we want to count
     *   }
     * })
    **/
    count<T extends PRODUCT_CATEGORYCountArgs>(
      args?: Subset<T, PRODUCT_CATEGORYCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PRODUCT_CATEGORYCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PRODUCT_CATEGORY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PRODUCT_CATEGORYAggregateArgs>(args: Subset<T, PRODUCT_CATEGORYAggregateArgs>): Prisma.PrismaPromise<GetPRODUCT_CATEGORYAggregateType<T>>

    /**
     * Group by PRODUCT_CATEGORY.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PRODUCT_CATEGORYGroupByArgs} args - Group by arguments.
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
      T extends PRODUCT_CATEGORYGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PRODUCT_CATEGORYGroupByArgs['orderBy'] }
        : { orderBy?: PRODUCT_CATEGORYGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PRODUCT_CATEGORYGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPRODUCT_CATEGORYGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PRODUCT_CATEGORY model
   */
  readonly fields: PRODUCT_CATEGORYFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PRODUCT_CATEGORY.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PRODUCT_CATEGORYClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    PRODUCT<T extends PRODUCT_CATEGORY$PRODUCTArgs<ExtArgs> = {}>(args?: Subset<T, PRODUCT_CATEGORY$PRODUCTArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PRODUCTPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PRODUCT_CATEGORY model
   */ 
  interface PRODUCT_CATEGORYFieldRefs {
    readonly id: FieldRef<"PRODUCT_CATEGORY", 'Int'>
    readonly name: FieldRef<"PRODUCT_CATEGORY", 'String'>
    readonly created_by: FieldRef<"PRODUCT_CATEGORY", 'Int'>
    readonly created_date: FieldRef<"PRODUCT_CATEGORY", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * PRODUCT_CATEGORY findUnique
   */
  export type PRODUCT_CATEGORYFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_CATEGORY to fetch.
     */
    where: PRODUCT_CATEGORYWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY findUniqueOrThrow
   */
  export type PRODUCT_CATEGORYFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_CATEGORY to fetch.
     */
    where: PRODUCT_CATEGORYWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY findFirst
   */
  export type PRODUCT_CATEGORYFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_CATEGORY to fetch.
     */
    where?: PRODUCT_CATEGORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_CATEGORIES to fetch.
     */
    orderBy?: PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput | PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCT_CATEGORIES.
     */
    cursor?: PRODUCT_CATEGORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_CATEGORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_CATEGORIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCT_CATEGORIES.
     */
    distinct?: PRODUCT_CATEGORYScalarFieldEnum | PRODUCT_CATEGORYScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY findFirstOrThrow
   */
  export type PRODUCT_CATEGORYFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_CATEGORY to fetch.
     */
    where?: PRODUCT_CATEGORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_CATEGORIES to fetch.
     */
    orderBy?: PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput | PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PRODUCT_CATEGORIES.
     */
    cursor?: PRODUCT_CATEGORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_CATEGORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_CATEGORIES.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PRODUCT_CATEGORIES.
     */
    distinct?: PRODUCT_CATEGORYScalarFieldEnum | PRODUCT_CATEGORYScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY findMany
   */
  export type PRODUCT_CATEGORYFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * Filter, which PRODUCT_CATEGORIES to fetch.
     */
    where?: PRODUCT_CATEGORYWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PRODUCT_CATEGORIES to fetch.
     */
    orderBy?: PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput | PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PRODUCT_CATEGORIES.
     */
    cursor?: PRODUCT_CATEGORYWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PRODUCT_CATEGORIES from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PRODUCT_CATEGORIES.
     */
    skip?: number
    distinct?: PRODUCT_CATEGORYScalarFieldEnum | PRODUCT_CATEGORYScalarFieldEnum[]
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY create
   */
  export type PRODUCT_CATEGORYCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * The data needed to create a PRODUCT_CATEGORY.
     */
    data?: XOR<PRODUCT_CATEGORYCreateInput, PRODUCT_CATEGORYUncheckedCreateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY createMany
   */
  export type PRODUCT_CATEGORYCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PRODUCT_CATEGORIES.
     */
    data: PRODUCT_CATEGORYCreateManyInput | PRODUCT_CATEGORYCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * PRODUCT_CATEGORY update
   */
  export type PRODUCT_CATEGORYUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * The data needed to update a PRODUCT_CATEGORY.
     */
    data: XOR<PRODUCT_CATEGORYUpdateInput, PRODUCT_CATEGORYUncheckedUpdateInput>
    /**
     * Choose, which PRODUCT_CATEGORY to update.
     */
    where: PRODUCT_CATEGORYWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY updateMany
   */
  export type PRODUCT_CATEGORYUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PRODUCT_CATEGORIES.
     */
    data: XOR<PRODUCT_CATEGORYUpdateManyMutationInput, PRODUCT_CATEGORYUncheckedUpdateManyInput>
    /**
     * Filter which PRODUCT_CATEGORIES to update
     */
    where?: PRODUCT_CATEGORYWhereInput
  }


  /**
   * PRODUCT_CATEGORY upsert
   */
  export type PRODUCT_CATEGORYUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * The filter to search for the PRODUCT_CATEGORY to update in case it exists.
     */
    where: PRODUCT_CATEGORYWhereUniqueInput
    /**
     * In case the PRODUCT_CATEGORY found by the `where` argument doesn't exist, create a new PRODUCT_CATEGORY with this data.
     */
    create: XOR<PRODUCT_CATEGORYCreateInput, PRODUCT_CATEGORYUncheckedCreateInput>
    /**
     * In case the PRODUCT_CATEGORY was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PRODUCT_CATEGORYUpdateInput, PRODUCT_CATEGORYUncheckedUpdateInput>
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY delete
   */
  export type PRODUCT_CATEGORYDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
    /**
     * Filter which PRODUCT_CATEGORY to delete.
     */
    where: PRODUCT_CATEGORYWhereUniqueInput
    relationLoadStrategy?: RelationLoadStrategy
  }


  /**
   * PRODUCT_CATEGORY deleteMany
   */
  export type PRODUCT_CATEGORYDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PRODUCT_CATEGORIES to delete
     */
    where?: PRODUCT_CATEGORYWhereInput
  }


  /**
   * PRODUCT_CATEGORY.PRODUCT
   */
  export type PRODUCT_CATEGORY$PRODUCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT
     */
    select?: PRODUCTSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCTInclude<ExtArgs> | null
    where?: PRODUCTWhereInput
    orderBy?: PRODUCTOrderByWithRelationAndSearchRelevanceInput | PRODUCTOrderByWithRelationAndSearchRelevanceInput[]
    cursor?: PRODUCTWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PRODUCTScalarFieldEnum | PRODUCTScalarFieldEnum[]
  }


  /**
   * PRODUCT_CATEGORY without action
   */
  export type PRODUCT_CATEGORYDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PRODUCT_CATEGORY
     */
    select?: PRODUCT_CATEGORYSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PRODUCT_CATEGORYInclude<ExtArgs> | null
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


  export const USERScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    username: 'username',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    picture: 'picture',
    firebase_uid: 'firebase_uid',
    phone: 'phone',
    email: 'email',
    user_level: 'user_level',
    status: 'status',
    created_date: 'created_date',
    updated_date: 'updated_date'
  };

  export type USERScalarFieldEnum = (typeof USERScalarFieldEnum)[keyof typeof USERScalarFieldEnum]


  export const RelationLoadStrategy: {
    query: 'query',
    join: 'join'
  };

  export type RelationLoadStrategy = (typeof RelationLoadStrategy)[keyof typeof RelationLoadStrategy]


  export const PRODUCTScalarFieldEnum: {
    id: 'id',
    uuid: 'uuid',
    product_name: 'product_name',
    description: 'description',
    amount: 'amount',
    category_id: 'category_id',
    status: 'status',
    user_uuid: 'user_uuid',
    created_by: 'created_by',
    created_date: 'created_date',
    updated_by: 'updated_by',
    updated_date: 'updated_date'
  };

  export type PRODUCTScalarFieldEnum = (typeof PRODUCTScalarFieldEnum)[keyof typeof PRODUCTScalarFieldEnum]


  export const PRODUCT_FAVORITEScalarFieldEnum: {
    id: 'id',
    favorite: 'favorite',
    user_id: 'user_id',
    created_by: 'created_by',
    created_date: 'created_date'
  };

  export type PRODUCT_FAVORITEScalarFieldEnum = (typeof PRODUCT_FAVORITEScalarFieldEnum)[keyof typeof PRODUCT_FAVORITEScalarFieldEnum]


  export const PRODUCT_LIKEScalarFieldEnum: {
    id: 'id',
    like: 'like',
    user_id: 'user_id',
    created_by: 'created_by',
    created_date: 'created_date'
  };

  export type PRODUCT_LIKEScalarFieldEnum = (typeof PRODUCT_LIKEScalarFieldEnum)[keyof typeof PRODUCT_LIKEScalarFieldEnum]


  export const PRODUCT_CATEGORYScalarFieldEnum: {
    id: 'id',
    name: 'name',
    created_by: 'created_by',
    created_date: 'created_date'
  };

  export type PRODUCT_CATEGORYScalarFieldEnum = (typeof PRODUCT_CATEGORYScalarFieldEnum)[keyof typeof PRODUCT_CATEGORYScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const USEROrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    username: 'username',
    password: 'password',
    first_name: 'first_name',
    last_name: 'last_name',
    picture: 'picture',
    firebase_uid: 'firebase_uid',
    phone: 'phone',
    email: 'email'
  };

  export type USEROrderByRelevanceFieldEnum = (typeof USEROrderByRelevanceFieldEnum)[keyof typeof USEROrderByRelevanceFieldEnum]


  export const PRODUCTOrderByRelevanceFieldEnum: {
    uuid: 'uuid',
    product_name: 'product_name',
    description: 'description',
    user_uuid: 'user_uuid'
  };

  export type PRODUCTOrderByRelevanceFieldEnum = (typeof PRODUCTOrderByRelevanceFieldEnum)[keyof typeof PRODUCTOrderByRelevanceFieldEnum]


  export const PRODUCT_CATEGORYOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type PRODUCT_CATEGORYOrderByRelevanceFieldEnum = (typeof PRODUCT_CATEGORYOrderByRelevanceFieldEnum)[keyof typeof PRODUCT_CATEGORYOrderByRelevanceFieldEnum]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type USERWhereInput = {
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    id?: IntFilter<"USER"> | number
    uuid?: StringFilter<"USER"> | string
    username?: StringNullableFilter<"USER"> | string | null
    password?: StringFilter<"USER"> | string
    first_name?: StringNullableFilter<"USER"> | string | null
    last_name?: StringNullableFilter<"USER"> | string | null
    picture?: StringNullableFilter<"USER"> | string | null
    firebase_uid?: StringNullableFilter<"USER"> | string | null
    phone?: StringNullableFilter<"USER"> | string | null
    email?: StringFilter<"USER"> | string
    user_level?: IntNullableFilter<"USER"> | number | null
    status?: IntFilter<"USER"> | number
    created_date?: DateTimeNullableFilter<"USER"> | Date | string | null
    updated_date?: DateTimeNullableFilter<"USER"> | Date | string | null
    PRODUCT?: PRODUCTListRelationFilter
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEListRelationFilter
  }

  export type USEROrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    firebase_uid?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    user_level?: SortOrderInput | SortOrder
    status?: SortOrder
    created_date?: SortOrderInput | SortOrder
    updated_date?: SortOrderInput | SortOrder
    PRODUCT?: PRODUCTOrderByRelationAggregateInput
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEOrderByRelationAggregateInput
    _relevance?: USEROrderByRelevanceInput
  }

  export type USERWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    email?: string
    AND?: USERWhereInput | USERWhereInput[]
    OR?: USERWhereInput[]
    NOT?: USERWhereInput | USERWhereInput[]
    username?: StringNullableFilter<"USER"> | string | null
    password?: StringFilter<"USER"> | string
    first_name?: StringNullableFilter<"USER"> | string | null
    last_name?: StringNullableFilter<"USER"> | string | null
    picture?: StringNullableFilter<"USER"> | string | null
    firebase_uid?: StringNullableFilter<"USER"> | string | null
    phone?: StringNullableFilter<"USER"> | string | null
    user_level?: IntNullableFilter<"USER"> | number | null
    status?: IntFilter<"USER"> | number
    created_date?: DateTimeNullableFilter<"USER"> | Date | string | null
    updated_date?: DateTimeNullableFilter<"USER"> | Date | string | null
    PRODUCT?: PRODUCTListRelationFilter
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEListRelationFilter
  }, "id" | "id" | "uuid" | "email">

  export type USEROrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrderInput | SortOrder
    password?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    picture?: SortOrderInput | SortOrder
    firebase_uid?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    email?: SortOrder
    user_level?: SortOrderInput | SortOrder
    status?: SortOrder
    created_date?: SortOrderInput | SortOrder
    updated_date?: SortOrderInput | SortOrder
    _count?: USERCountOrderByAggregateInput
    _avg?: USERAvgOrderByAggregateInput
    _max?: USERMaxOrderByAggregateInput
    _min?: USERMinOrderByAggregateInput
    _sum?: USERSumOrderByAggregateInput
  }

  export type USERScalarWhereWithAggregatesInput = {
    AND?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    OR?: USERScalarWhereWithAggregatesInput[]
    NOT?: USERScalarWhereWithAggregatesInput | USERScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"USER"> | number
    uuid?: StringWithAggregatesFilter<"USER"> | string
    username?: StringNullableWithAggregatesFilter<"USER"> | string | null
    password?: StringWithAggregatesFilter<"USER"> | string
    first_name?: StringNullableWithAggregatesFilter<"USER"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"USER"> | string | null
    picture?: StringNullableWithAggregatesFilter<"USER"> | string | null
    firebase_uid?: StringNullableWithAggregatesFilter<"USER"> | string | null
    phone?: StringNullableWithAggregatesFilter<"USER"> | string | null
    email?: StringWithAggregatesFilter<"USER"> | string
    user_level?: IntNullableWithAggregatesFilter<"USER"> | number | null
    status?: IntWithAggregatesFilter<"USER"> | number
    created_date?: DateTimeNullableWithAggregatesFilter<"USER"> | Date | string | null
    updated_date?: DateTimeNullableWithAggregatesFilter<"USER"> | Date | string | null
  }

  export type PRODUCTWhereInput = {
    AND?: PRODUCTWhereInput | PRODUCTWhereInput[]
    OR?: PRODUCTWhereInput[]
    NOT?: PRODUCTWhereInput | PRODUCTWhereInput[]
    id?: IntFilter<"PRODUCT"> | number
    uuid?: StringFilter<"PRODUCT"> | string
    product_name?: StringFilter<"PRODUCT"> | string
    description?: StringNullableFilter<"PRODUCT"> | string | null
    amount?: IntFilter<"PRODUCT"> | number
    category_id?: IntNullableFilter<"PRODUCT"> | number | null
    status?: IntFilter<"PRODUCT"> | number
    user_uuid?: StringFilter<"PRODUCT"> | string
    created_by?: IntNullableFilter<"PRODUCT"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT"> | Date | string | null
    updated_by?: IntNullableFilter<"PRODUCT"> | number | null
    updated_date?: DateTimeNullableFilter<"PRODUCT"> | Date | string | null
    PRODUCT_CATEGORY?: XOR<PRODUCT_CATEGORYNullableRelationFilter, PRODUCT_CATEGORYWhereInput> | null
    USER?: XOR<USERRelationFilter, USERWhereInput>
  }

  export type PRODUCTOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    uuid?: SortOrder
    product_name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    category_id?: SortOrderInput | SortOrder
    status?: SortOrder
    user_uuid?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_date?: SortOrderInput | SortOrder
    PRODUCT_CATEGORY?: PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput
    USER?: USEROrderByWithRelationAndSearchRelevanceInput
    _relevance?: PRODUCTOrderByRelevanceInput
  }

  export type PRODUCTWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    uuid?: string
    AND?: PRODUCTWhereInput | PRODUCTWhereInput[]
    OR?: PRODUCTWhereInput[]
    NOT?: PRODUCTWhereInput | PRODUCTWhereInput[]
    product_name?: StringFilter<"PRODUCT"> | string
    description?: StringNullableFilter<"PRODUCT"> | string | null
    amount?: IntFilter<"PRODUCT"> | number
    category_id?: IntNullableFilter<"PRODUCT"> | number | null
    status?: IntFilter<"PRODUCT"> | number
    user_uuid?: StringFilter<"PRODUCT"> | string
    created_by?: IntNullableFilter<"PRODUCT"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT"> | Date | string | null
    updated_by?: IntNullableFilter<"PRODUCT"> | number | null
    updated_date?: DateTimeNullableFilter<"PRODUCT"> | Date | string | null
    PRODUCT_CATEGORY?: XOR<PRODUCT_CATEGORYNullableRelationFilter, PRODUCT_CATEGORYWhereInput> | null
    USER?: XOR<USERRelationFilter, USERWhereInput>
  }, "id" | "id" | "uuid">

  export type PRODUCTOrderByWithAggregationInput = {
    id?: SortOrder
    uuid?: SortOrder
    product_name?: SortOrder
    description?: SortOrderInput | SortOrder
    amount?: SortOrder
    category_id?: SortOrderInput | SortOrder
    status?: SortOrder
    user_uuid?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    updated_by?: SortOrderInput | SortOrder
    updated_date?: SortOrderInput | SortOrder
    _count?: PRODUCTCountOrderByAggregateInput
    _avg?: PRODUCTAvgOrderByAggregateInput
    _max?: PRODUCTMaxOrderByAggregateInput
    _min?: PRODUCTMinOrderByAggregateInput
    _sum?: PRODUCTSumOrderByAggregateInput
  }

  export type PRODUCTScalarWhereWithAggregatesInput = {
    AND?: PRODUCTScalarWhereWithAggregatesInput | PRODUCTScalarWhereWithAggregatesInput[]
    OR?: PRODUCTScalarWhereWithAggregatesInput[]
    NOT?: PRODUCTScalarWhereWithAggregatesInput | PRODUCTScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PRODUCT"> | number
    uuid?: StringWithAggregatesFilter<"PRODUCT"> | string
    product_name?: StringWithAggregatesFilter<"PRODUCT"> | string
    description?: StringNullableWithAggregatesFilter<"PRODUCT"> | string | null
    amount?: IntWithAggregatesFilter<"PRODUCT"> | number
    category_id?: IntNullableWithAggregatesFilter<"PRODUCT"> | number | null
    status?: IntWithAggregatesFilter<"PRODUCT"> | number
    user_uuid?: StringWithAggregatesFilter<"PRODUCT"> | string
    created_by?: IntNullableWithAggregatesFilter<"PRODUCT"> | number | null
    created_date?: DateTimeNullableWithAggregatesFilter<"PRODUCT"> | Date | string | null
    updated_by?: IntNullableWithAggregatesFilter<"PRODUCT"> | number | null
    updated_date?: DateTimeNullableWithAggregatesFilter<"PRODUCT"> | Date | string | null
  }

  export type PRODUCT_FAVORITEWhereInput = {
    AND?: PRODUCT_FAVORITEWhereInput | PRODUCT_FAVORITEWhereInput[]
    OR?: PRODUCT_FAVORITEWhereInput[]
    NOT?: PRODUCT_FAVORITEWhereInput | PRODUCT_FAVORITEWhereInput[]
    id?: IntFilter<"PRODUCT_FAVORITE"> | number
    favorite?: IntFilter<"PRODUCT_FAVORITE"> | number
    user_id?: IntFilter<"PRODUCT_FAVORITE"> | number
    created_by?: IntFilter<"PRODUCT_FAVORITE"> | number
    created_date?: DateTimeNullableFilter<"PRODUCT_FAVORITE"> | Date | string | null
    USER?: XOR<USERRelationFilter, USERWhereInput>
  }

  export type PRODUCT_FAVORITEOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrderInput | SortOrder
    USER?: USEROrderByWithRelationAndSearchRelevanceInput
  }

  export type PRODUCT_FAVORITEWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PRODUCT_FAVORITEWhereInput | PRODUCT_FAVORITEWhereInput[]
    OR?: PRODUCT_FAVORITEWhereInput[]
    NOT?: PRODUCT_FAVORITEWhereInput | PRODUCT_FAVORITEWhereInput[]
    favorite?: IntFilter<"PRODUCT_FAVORITE"> | number
    user_id?: IntFilter<"PRODUCT_FAVORITE"> | number
    created_by?: IntFilter<"PRODUCT_FAVORITE"> | number
    created_date?: DateTimeNullableFilter<"PRODUCT_FAVORITE"> | Date | string | null
    USER?: XOR<USERRelationFilter, USERWhereInput>
  }, "id" | "id">

  export type PRODUCT_FAVORITEOrderByWithAggregationInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrderInput | SortOrder
    _count?: PRODUCT_FAVORITECountOrderByAggregateInput
    _avg?: PRODUCT_FAVORITEAvgOrderByAggregateInput
    _max?: PRODUCT_FAVORITEMaxOrderByAggregateInput
    _min?: PRODUCT_FAVORITEMinOrderByAggregateInput
    _sum?: PRODUCT_FAVORITESumOrderByAggregateInput
  }

  export type PRODUCT_FAVORITEScalarWhereWithAggregatesInput = {
    AND?: PRODUCT_FAVORITEScalarWhereWithAggregatesInput | PRODUCT_FAVORITEScalarWhereWithAggregatesInput[]
    OR?: PRODUCT_FAVORITEScalarWhereWithAggregatesInput[]
    NOT?: PRODUCT_FAVORITEScalarWhereWithAggregatesInput | PRODUCT_FAVORITEScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PRODUCT_FAVORITE"> | number
    favorite?: IntWithAggregatesFilter<"PRODUCT_FAVORITE"> | number
    user_id?: IntWithAggregatesFilter<"PRODUCT_FAVORITE"> | number
    created_by?: IntWithAggregatesFilter<"PRODUCT_FAVORITE"> | number
    created_date?: DateTimeNullableWithAggregatesFilter<"PRODUCT_FAVORITE"> | Date | string | null
  }

  export type PRODUCT_LIKEWhereInput = {
    AND?: PRODUCT_LIKEWhereInput | PRODUCT_LIKEWhereInput[]
    OR?: PRODUCT_LIKEWhereInput[]
    NOT?: PRODUCT_LIKEWhereInput | PRODUCT_LIKEWhereInput[]
    id?: IntFilter<"PRODUCT_LIKE"> | number
    like?: IntFilter<"PRODUCT_LIKE"> | number
    user_id?: IntFilter<"PRODUCT_LIKE"> | number
    created_by?: IntNullableFilter<"PRODUCT_LIKE"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT_LIKE"> | Date | string | null
  }

  export type PRODUCT_LIKEOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
  }

  export type PRODUCT_LIKEWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PRODUCT_LIKEWhereInput | PRODUCT_LIKEWhereInput[]
    OR?: PRODUCT_LIKEWhereInput[]
    NOT?: PRODUCT_LIKEWhereInput | PRODUCT_LIKEWhereInput[]
    like?: IntFilter<"PRODUCT_LIKE"> | number
    user_id?: IntFilter<"PRODUCT_LIKE"> | number
    created_by?: IntNullableFilter<"PRODUCT_LIKE"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT_LIKE"> | Date | string | null
  }, "id">

  export type PRODUCT_LIKEOrderByWithAggregationInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    _count?: PRODUCT_LIKECountOrderByAggregateInput
    _avg?: PRODUCT_LIKEAvgOrderByAggregateInput
    _max?: PRODUCT_LIKEMaxOrderByAggregateInput
    _min?: PRODUCT_LIKEMinOrderByAggregateInput
    _sum?: PRODUCT_LIKESumOrderByAggregateInput
  }

  export type PRODUCT_LIKEScalarWhereWithAggregatesInput = {
    AND?: PRODUCT_LIKEScalarWhereWithAggregatesInput | PRODUCT_LIKEScalarWhereWithAggregatesInput[]
    OR?: PRODUCT_LIKEScalarWhereWithAggregatesInput[]
    NOT?: PRODUCT_LIKEScalarWhereWithAggregatesInput | PRODUCT_LIKEScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PRODUCT_LIKE"> | number
    like?: IntWithAggregatesFilter<"PRODUCT_LIKE"> | number
    user_id?: IntWithAggregatesFilter<"PRODUCT_LIKE"> | number
    created_by?: IntNullableWithAggregatesFilter<"PRODUCT_LIKE"> | number | null
    created_date?: DateTimeNullableWithAggregatesFilter<"PRODUCT_LIKE"> | Date | string | null
  }

  export type PRODUCT_CATEGORYWhereInput = {
    AND?: PRODUCT_CATEGORYWhereInput | PRODUCT_CATEGORYWhereInput[]
    OR?: PRODUCT_CATEGORYWhereInput[]
    NOT?: PRODUCT_CATEGORYWhereInput | PRODUCT_CATEGORYWhereInput[]
    id?: IntFilter<"PRODUCT_CATEGORY"> | number
    name?: StringNullableFilter<"PRODUCT_CATEGORY"> | string | null
    created_by?: IntNullableFilter<"PRODUCT_CATEGORY"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT_CATEGORY"> | Date | string | null
    PRODUCT?: PRODUCTListRelationFilter
  }

  export type PRODUCT_CATEGORYOrderByWithRelationAndSearchRelevanceInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    PRODUCT?: PRODUCTOrderByRelationAggregateInput
    _relevance?: PRODUCT_CATEGORYOrderByRelevanceInput
  }

  export type PRODUCT_CATEGORYWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PRODUCT_CATEGORYWhereInput | PRODUCT_CATEGORYWhereInput[]
    OR?: PRODUCT_CATEGORYWhereInput[]
    NOT?: PRODUCT_CATEGORYWhereInput | PRODUCT_CATEGORYWhereInput[]
    name?: StringNullableFilter<"PRODUCT_CATEGORY"> | string | null
    created_by?: IntNullableFilter<"PRODUCT_CATEGORY"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT_CATEGORY"> | Date | string | null
    PRODUCT?: PRODUCTListRelationFilter
  }, "id">

  export type PRODUCT_CATEGORYOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    created_by?: SortOrderInput | SortOrder
    created_date?: SortOrderInput | SortOrder
    _count?: PRODUCT_CATEGORYCountOrderByAggregateInput
    _avg?: PRODUCT_CATEGORYAvgOrderByAggregateInput
    _max?: PRODUCT_CATEGORYMaxOrderByAggregateInput
    _min?: PRODUCT_CATEGORYMinOrderByAggregateInput
    _sum?: PRODUCT_CATEGORYSumOrderByAggregateInput
  }

  export type PRODUCT_CATEGORYScalarWhereWithAggregatesInput = {
    AND?: PRODUCT_CATEGORYScalarWhereWithAggregatesInput | PRODUCT_CATEGORYScalarWhereWithAggregatesInput[]
    OR?: PRODUCT_CATEGORYScalarWhereWithAggregatesInput[]
    NOT?: PRODUCT_CATEGORYScalarWhereWithAggregatesInput | PRODUCT_CATEGORYScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"PRODUCT_CATEGORY"> | number
    name?: StringNullableWithAggregatesFilter<"PRODUCT_CATEGORY"> | string | null
    created_by?: IntNullableWithAggregatesFilter<"PRODUCT_CATEGORY"> | number | null
    created_date?: DateTimeNullableWithAggregatesFilter<"PRODUCT_CATEGORY"> | Date | string | null
  }

  export type USERCreateInput = {
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
    PRODUCT?: PRODUCTCreateNestedManyWithoutUSERInput
    PRODUCT_FAVORITE?: PRODUCT_FAVORITECreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateInput = {
    id?: number
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
    PRODUCT?: PRODUCTUncheckedCreateNestedManyWithoutUSERInput
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT?: PRODUCTUpdateManyWithoutUSERNestedInput
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT?: PRODUCTUncheckedUpdateManyWithoutUSERNestedInput
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type USERCreateManyInput = {
    id?: number
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
  }

  export type USERUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type USERUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCTCreateInput = {
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    status?: number
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
    PRODUCT_CATEGORY?: PRODUCT_CATEGORYCreateNestedOneWithoutPRODUCTInput
    USER: USERCreateNestedOneWithoutPRODUCTInput
  }

  export type PRODUCTUncheckedCreateInput = {
    id?: number
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    category_id?: number | null
    status?: number
    user_uuid: string
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
  }

  export type PRODUCTUpdateInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT_CATEGORY?: PRODUCT_CATEGORYUpdateOneWithoutPRODUCTNestedInput
    USER?: USERUpdateOneRequiredWithoutPRODUCTNestedInput
  }

  export type PRODUCTUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCTCreateManyInput = {
    id?: number
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    category_id?: number | null
    status?: number
    user_uuid: string
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
  }

  export type PRODUCTUpdateManyMutationInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCTUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_FAVORITECreateInput = {
    favorite?: number
    created_by: number
    created_date?: Date | string | null
    USER: USERCreateNestedOneWithoutPRODUCT_FAVORITEInput
  }

  export type PRODUCT_FAVORITEUncheckedCreateInput = {
    id?: number
    favorite?: number
    user_id: number
    created_by: number
    created_date?: Date | string | null
  }

  export type PRODUCT_FAVORITEUpdateInput = {
    favorite?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER?: USERUpdateOneRequiredWithoutPRODUCT_FAVORITENestedInput
  }

  export type PRODUCT_FAVORITEUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    favorite?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_FAVORITECreateManyInput = {
    id?: number
    favorite?: number
    user_id: number
    created_by: number
    created_date?: Date | string | null
  }

  export type PRODUCT_FAVORITEUpdateManyMutationInput = {
    favorite?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_FAVORITEUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    favorite?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_LIKECreateInput = {
    like?: number
    user_id: number
    created_by?: number | null
    created_date?: Date | string | null
  }

  export type PRODUCT_LIKEUncheckedCreateInput = {
    id?: number
    like?: number
    user_id: number
    created_by?: number | null
    created_date?: Date | string | null
  }

  export type PRODUCT_LIKEUpdateInput = {
    like?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_LIKEUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    like?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_LIKECreateManyInput = {
    id?: number
    like?: number
    user_id: number
    created_by?: number | null
    created_date?: Date | string | null
  }

  export type PRODUCT_LIKEUpdateManyMutationInput = {
    like?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_LIKEUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    like?: IntFieldUpdateOperationsInput | number
    user_id?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_CATEGORYCreateInput = {
    name?: string | null
    created_by?: number | null
    created_date?: Date | string | null
    PRODUCT?: PRODUCTCreateNestedManyWithoutPRODUCT_CATEGORYInput
  }

  export type PRODUCT_CATEGORYUncheckedCreateInput = {
    id?: number
    name?: string | null
    created_by?: number | null
    created_date?: Date | string | null
    PRODUCT?: PRODUCTUncheckedCreateNestedManyWithoutPRODUCT_CATEGORYInput
  }

  export type PRODUCT_CATEGORYUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT?: PRODUCTUpdateManyWithoutPRODUCT_CATEGORYNestedInput
  }

  export type PRODUCT_CATEGORYUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT?: PRODUCTUncheckedUpdateManyWithoutPRODUCT_CATEGORYNestedInput
  }

  export type PRODUCT_CATEGORYCreateManyInput = {
    id?: number
    name?: string | null
    created_by?: number | null
    created_date?: Date | string | null
  }

  export type PRODUCT_CATEGORYUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_CATEGORYUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type PRODUCTListRelationFilter = {
    every?: PRODUCTWhereInput
    some?: PRODUCTWhereInput
    none?: PRODUCTWhereInput
  }

  export type PRODUCT_FAVORITEListRelationFilter = {
    every?: PRODUCT_FAVORITEWhereInput
    some?: PRODUCT_FAVORITEWhereInput
    none?: PRODUCT_FAVORITEWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PRODUCTOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PRODUCT_FAVORITEOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type USEROrderByRelevanceInput = {
    fields: USEROrderByRelevanceFieldEnum | USEROrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type USERCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    picture?: SortOrder
    firebase_uid?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    user_level?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type USERAvgOrderByAggregateInput = {
    id?: SortOrder
    user_level?: SortOrder
    status?: SortOrder
  }

  export type USERMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    picture?: SortOrder
    firebase_uid?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    user_level?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type USERMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    username?: SortOrder
    password?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    picture?: SortOrder
    firebase_uid?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    user_level?: SortOrder
    status?: SortOrder
    created_date?: SortOrder
    updated_date?: SortOrder
  }

  export type USERSumOrderByAggregateInput = {
    id?: SortOrder
    user_level?: SortOrder
    status?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PRODUCT_CATEGORYNullableRelationFilter = {
    is?: PRODUCT_CATEGORYWhereInput | null
    isNot?: PRODUCT_CATEGORYWhereInput | null
  }

  export type USERRelationFilter = {
    is?: USERWhereInput
    isNot?: USERWhereInput
  }

  export type PRODUCTOrderByRelevanceInput = {
    fields: PRODUCTOrderByRelevanceFieldEnum | PRODUCTOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PRODUCTCountOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    user_uuid?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_by?: SortOrder
    updated_date?: SortOrder
  }

  export type PRODUCTAvgOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type PRODUCTMaxOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    user_uuid?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_by?: SortOrder
    updated_date?: SortOrder
  }

  export type PRODUCTMinOrderByAggregateInput = {
    id?: SortOrder
    uuid?: SortOrder
    product_name?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    user_uuid?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
    updated_by?: SortOrder
    updated_date?: SortOrder
  }

  export type PRODUCTSumOrderByAggregateInput = {
    id?: SortOrder
    amount?: SortOrder
    category_id?: SortOrder
    status?: SortOrder
    created_by?: SortOrder
    updated_by?: SortOrder
  }

  export type PRODUCT_FAVORITECountOrderByAggregateInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_FAVORITEAvgOrderByAggregateInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
  }

  export type PRODUCT_FAVORITEMaxOrderByAggregateInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_FAVORITEMinOrderByAggregateInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_FAVORITESumOrderByAggregateInput = {
    id?: SortOrder
    favorite?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
  }

  export type PRODUCT_LIKECountOrderByAggregateInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_LIKEAvgOrderByAggregateInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
  }

  export type PRODUCT_LIKEMaxOrderByAggregateInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_LIKEMinOrderByAggregateInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_LIKESumOrderByAggregateInput = {
    id?: SortOrder
    like?: SortOrder
    user_id?: SortOrder
    created_by?: SortOrder
  }

  export type PRODUCT_CATEGORYOrderByRelevanceInput = {
    fields: PRODUCT_CATEGORYOrderByRelevanceFieldEnum | PRODUCT_CATEGORYOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type PRODUCT_CATEGORYCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_CATEGORYAvgOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type PRODUCT_CATEGORYMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_CATEGORYMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    created_by?: SortOrder
    created_date?: SortOrder
  }

  export type PRODUCT_CATEGORYSumOrderByAggregateInput = {
    id?: SortOrder
    created_by?: SortOrder
  }

  export type PRODUCTCreateNestedManyWithoutUSERInput = {
    create?: XOR<PRODUCTCreateWithoutUSERInput, PRODUCTUncheckedCreateWithoutUSERInput> | PRODUCTCreateWithoutUSERInput[] | PRODUCTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutUSERInput | PRODUCTCreateOrConnectWithoutUSERInput[]
    createMany?: PRODUCTCreateManyUSERInputEnvelope
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
  }

  export type PRODUCT_FAVORITECreateNestedManyWithoutUSERInput = {
    create?: XOR<PRODUCT_FAVORITECreateWithoutUSERInput, PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput> | PRODUCT_FAVORITECreateWithoutUSERInput[] | PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCT_FAVORITECreateOrConnectWithoutUSERInput | PRODUCT_FAVORITECreateOrConnectWithoutUSERInput[]
    createMany?: PRODUCT_FAVORITECreateManyUSERInputEnvelope
    connect?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
  }

  export type PRODUCTUncheckedCreateNestedManyWithoutUSERInput = {
    create?: XOR<PRODUCTCreateWithoutUSERInput, PRODUCTUncheckedCreateWithoutUSERInput> | PRODUCTCreateWithoutUSERInput[] | PRODUCTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutUSERInput | PRODUCTCreateOrConnectWithoutUSERInput[]
    createMany?: PRODUCTCreateManyUSERInputEnvelope
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
  }

  export type PRODUCT_FAVORITEUncheckedCreateNestedManyWithoutUSERInput = {
    create?: XOR<PRODUCT_FAVORITECreateWithoutUSERInput, PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput> | PRODUCT_FAVORITECreateWithoutUSERInput[] | PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCT_FAVORITECreateOrConnectWithoutUSERInput | PRODUCT_FAVORITECreateOrConnectWithoutUSERInput[]
    createMany?: PRODUCT_FAVORITECreateManyUSERInputEnvelope
    connect?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type PRODUCTUpdateManyWithoutUSERNestedInput = {
    create?: XOR<PRODUCTCreateWithoutUSERInput, PRODUCTUncheckedCreateWithoutUSERInput> | PRODUCTCreateWithoutUSERInput[] | PRODUCTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutUSERInput | PRODUCTCreateOrConnectWithoutUSERInput[]
    upsert?: PRODUCTUpsertWithWhereUniqueWithoutUSERInput | PRODUCTUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: PRODUCTCreateManyUSERInputEnvelope
    set?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    disconnect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    delete?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    update?: PRODUCTUpdateWithWhereUniqueWithoutUSERInput | PRODUCTUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: PRODUCTUpdateManyWithWhereWithoutUSERInput | PRODUCTUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: PRODUCTScalarWhereInput | PRODUCTScalarWhereInput[]
  }

  export type PRODUCT_FAVORITEUpdateManyWithoutUSERNestedInput = {
    create?: XOR<PRODUCT_FAVORITECreateWithoutUSERInput, PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput> | PRODUCT_FAVORITECreateWithoutUSERInput[] | PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCT_FAVORITECreateOrConnectWithoutUSERInput | PRODUCT_FAVORITECreateOrConnectWithoutUSERInput[]
    upsert?: PRODUCT_FAVORITEUpsertWithWhereUniqueWithoutUSERInput | PRODUCT_FAVORITEUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: PRODUCT_FAVORITECreateManyUSERInputEnvelope
    set?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    disconnect?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    delete?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    connect?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    update?: PRODUCT_FAVORITEUpdateWithWhereUniqueWithoutUSERInput | PRODUCT_FAVORITEUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: PRODUCT_FAVORITEUpdateManyWithWhereWithoutUSERInput | PRODUCT_FAVORITEUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: PRODUCT_FAVORITEScalarWhereInput | PRODUCT_FAVORITEScalarWhereInput[]
  }

  export type PRODUCTUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: XOR<PRODUCTCreateWithoutUSERInput, PRODUCTUncheckedCreateWithoutUSERInput> | PRODUCTCreateWithoutUSERInput[] | PRODUCTUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutUSERInput | PRODUCTCreateOrConnectWithoutUSERInput[]
    upsert?: PRODUCTUpsertWithWhereUniqueWithoutUSERInput | PRODUCTUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: PRODUCTCreateManyUSERInputEnvelope
    set?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    disconnect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    delete?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    update?: PRODUCTUpdateWithWhereUniqueWithoutUSERInput | PRODUCTUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: PRODUCTUpdateManyWithWhereWithoutUSERInput | PRODUCTUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: PRODUCTScalarWhereInput | PRODUCTScalarWhereInput[]
  }

  export type PRODUCT_FAVORITEUncheckedUpdateManyWithoutUSERNestedInput = {
    create?: XOR<PRODUCT_FAVORITECreateWithoutUSERInput, PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput> | PRODUCT_FAVORITECreateWithoutUSERInput[] | PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput[]
    connectOrCreate?: PRODUCT_FAVORITECreateOrConnectWithoutUSERInput | PRODUCT_FAVORITECreateOrConnectWithoutUSERInput[]
    upsert?: PRODUCT_FAVORITEUpsertWithWhereUniqueWithoutUSERInput | PRODUCT_FAVORITEUpsertWithWhereUniqueWithoutUSERInput[]
    createMany?: PRODUCT_FAVORITECreateManyUSERInputEnvelope
    set?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    disconnect?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    delete?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    connect?: PRODUCT_FAVORITEWhereUniqueInput | PRODUCT_FAVORITEWhereUniqueInput[]
    update?: PRODUCT_FAVORITEUpdateWithWhereUniqueWithoutUSERInput | PRODUCT_FAVORITEUpdateWithWhereUniqueWithoutUSERInput[]
    updateMany?: PRODUCT_FAVORITEUpdateManyWithWhereWithoutUSERInput | PRODUCT_FAVORITEUpdateManyWithWhereWithoutUSERInput[]
    deleteMany?: PRODUCT_FAVORITEScalarWhereInput | PRODUCT_FAVORITEScalarWhereInput[]
  }

  export type PRODUCT_CATEGORYCreateNestedOneWithoutPRODUCTInput = {
    create?: XOR<PRODUCT_CATEGORYCreateWithoutPRODUCTInput, PRODUCT_CATEGORYUncheckedCreateWithoutPRODUCTInput>
    connectOrCreate?: PRODUCT_CATEGORYCreateOrConnectWithoutPRODUCTInput
    connect?: PRODUCT_CATEGORYWhereUniqueInput
  }

  export type USERCreateNestedOneWithoutPRODUCTInput = {
    create?: XOR<USERCreateWithoutPRODUCTInput, USERUncheckedCreateWithoutPRODUCTInput>
    connectOrCreate?: USERCreateOrConnectWithoutPRODUCTInput
    connect?: USERWhereUniqueInput
  }

  export type PRODUCT_CATEGORYUpdateOneWithoutPRODUCTNestedInput = {
    create?: XOR<PRODUCT_CATEGORYCreateWithoutPRODUCTInput, PRODUCT_CATEGORYUncheckedCreateWithoutPRODUCTInput>
    connectOrCreate?: PRODUCT_CATEGORYCreateOrConnectWithoutPRODUCTInput
    upsert?: PRODUCT_CATEGORYUpsertWithoutPRODUCTInput
    disconnect?: PRODUCT_CATEGORYWhereInput | boolean
    delete?: PRODUCT_CATEGORYWhereInput | boolean
    connect?: PRODUCT_CATEGORYWhereUniqueInput
    update?: XOR<XOR<PRODUCT_CATEGORYUpdateToOneWithWhereWithoutPRODUCTInput, PRODUCT_CATEGORYUpdateWithoutPRODUCTInput>, PRODUCT_CATEGORYUncheckedUpdateWithoutPRODUCTInput>
  }

  export type USERUpdateOneRequiredWithoutPRODUCTNestedInput = {
    create?: XOR<USERCreateWithoutPRODUCTInput, USERUncheckedCreateWithoutPRODUCTInput>
    connectOrCreate?: USERCreateOrConnectWithoutPRODUCTInput
    upsert?: USERUpsertWithoutPRODUCTInput
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutPRODUCTInput, USERUpdateWithoutPRODUCTInput>, USERUncheckedUpdateWithoutPRODUCTInput>
  }

  export type USERCreateNestedOneWithoutPRODUCT_FAVORITEInput = {
    create?: XOR<USERCreateWithoutPRODUCT_FAVORITEInput, USERUncheckedCreateWithoutPRODUCT_FAVORITEInput>
    connectOrCreate?: USERCreateOrConnectWithoutPRODUCT_FAVORITEInput
    connect?: USERWhereUniqueInput
  }

  export type USERUpdateOneRequiredWithoutPRODUCT_FAVORITENestedInput = {
    create?: XOR<USERCreateWithoutPRODUCT_FAVORITEInput, USERUncheckedCreateWithoutPRODUCT_FAVORITEInput>
    connectOrCreate?: USERCreateOrConnectWithoutPRODUCT_FAVORITEInput
    upsert?: USERUpsertWithoutPRODUCT_FAVORITEInput
    connect?: USERWhereUniqueInput
    update?: XOR<XOR<USERUpdateToOneWithWhereWithoutPRODUCT_FAVORITEInput, USERUpdateWithoutPRODUCT_FAVORITEInput>, USERUncheckedUpdateWithoutPRODUCT_FAVORITEInput>
  }

  export type PRODUCTCreateNestedManyWithoutPRODUCT_CATEGORYInput = {
    create?: XOR<PRODUCTCreateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput> | PRODUCTCreateWithoutPRODUCT_CATEGORYInput[] | PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput | PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput[]
    createMany?: PRODUCTCreateManyPRODUCT_CATEGORYInputEnvelope
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
  }

  export type PRODUCTUncheckedCreateNestedManyWithoutPRODUCT_CATEGORYInput = {
    create?: XOR<PRODUCTCreateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput> | PRODUCTCreateWithoutPRODUCT_CATEGORYInput[] | PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput | PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput[]
    createMany?: PRODUCTCreateManyPRODUCT_CATEGORYInputEnvelope
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
  }

  export type PRODUCTUpdateManyWithoutPRODUCT_CATEGORYNestedInput = {
    create?: XOR<PRODUCTCreateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput> | PRODUCTCreateWithoutPRODUCT_CATEGORYInput[] | PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput | PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput[]
    upsert?: PRODUCTUpsertWithWhereUniqueWithoutPRODUCT_CATEGORYInput | PRODUCTUpsertWithWhereUniqueWithoutPRODUCT_CATEGORYInput[]
    createMany?: PRODUCTCreateManyPRODUCT_CATEGORYInputEnvelope
    set?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    disconnect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    delete?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    update?: PRODUCTUpdateWithWhereUniqueWithoutPRODUCT_CATEGORYInput | PRODUCTUpdateWithWhereUniqueWithoutPRODUCT_CATEGORYInput[]
    updateMany?: PRODUCTUpdateManyWithWhereWithoutPRODUCT_CATEGORYInput | PRODUCTUpdateManyWithWhereWithoutPRODUCT_CATEGORYInput[]
    deleteMany?: PRODUCTScalarWhereInput | PRODUCTScalarWhereInput[]
  }

  export type PRODUCTUncheckedUpdateManyWithoutPRODUCT_CATEGORYNestedInput = {
    create?: XOR<PRODUCTCreateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput> | PRODUCTCreateWithoutPRODUCT_CATEGORYInput[] | PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput[]
    connectOrCreate?: PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput | PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput[]
    upsert?: PRODUCTUpsertWithWhereUniqueWithoutPRODUCT_CATEGORYInput | PRODUCTUpsertWithWhereUniqueWithoutPRODUCT_CATEGORYInput[]
    createMany?: PRODUCTCreateManyPRODUCT_CATEGORYInputEnvelope
    set?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    disconnect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    delete?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    connect?: PRODUCTWhereUniqueInput | PRODUCTWhereUniqueInput[]
    update?: PRODUCTUpdateWithWhereUniqueWithoutPRODUCT_CATEGORYInput | PRODUCTUpdateWithWhereUniqueWithoutPRODUCT_CATEGORYInput[]
    updateMany?: PRODUCTUpdateManyWithWhereWithoutPRODUCT_CATEGORYInput | PRODUCTUpdateManyWithWhereWithoutPRODUCT_CATEGORYInput[]
    deleteMany?: PRODUCTScalarWhereInput | PRODUCTScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type PRODUCTCreateWithoutUSERInput = {
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    status?: number
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
    PRODUCT_CATEGORY?: PRODUCT_CATEGORYCreateNestedOneWithoutPRODUCTInput
  }

  export type PRODUCTUncheckedCreateWithoutUSERInput = {
    id?: number
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    category_id?: number | null
    status?: number
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
  }

  export type PRODUCTCreateOrConnectWithoutUSERInput = {
    where: PRODUCTWhereUniqueInput
    create: XOR<PRODUCTCreateWithoutUSERInput, PRODUCTUncheckedCreateWithoutUSERInput>
  }

  export type PRODUCTCreateManyUSERInputEnvelope = {
    data: PRODUCTCreateManyUSERInput | PRODUCTCreateManyUSERInput[]
    skipDuplicates?: boolean
  }

  export type PRODUCT_FAVORITECreateWithoutUSERInput = {
    favorite?: number
    created_by: number
    created_date?: Date | string | null
  }

  export type PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput = {
    id?: number
    favorite?: number
    created_by: number
    created_date?: Date | string | null
  }

  export type PRODUCT_FAVORITECreateOrConnectWithoutUSERInput = {
    where: PRODUCT_FAVORITEWhereUniqueInput
    create: XOR<PRODUCT_FAVORITECreateWithoutUSERInput, PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput>
  }

  export type PRODUCT_FAVORITECreateManyUSERInputEnvelope = {
    data: PRODUCT_FAVORITECreateManyUSERInput | PRODUCT_FAVORITECreateManyUSERInput[]
    skipDuplicates?: boolean
  }

  export type PRODUCTUpsertWithWhereUniqueWithoutUSERInput = {
    where: PRODUCTWhereUniqueInput
    update: XOR<PRODUCTUpdateWithoutUSERInput, PRODUCTUncheckedUpdateWithoutUSERInput>
    create: XOR<PRODUCTCreateWithoutUSERInput, PRODUCTUncheckedCreateWithoutUSERInput>
  }

  export type PRODUCTUpdateWithWhereUniqueWithoutUSERInput = {
    where: PRODUCTWhereUniqueInput
    data: XOR<PRODUCTUpdateWithoutUSERInput, PRODUCTUncheckedUpdateWithoutUSERInput>
  }

  export type PRODUCTUpdateManyWithWhereWithoutUSERInput = {
    where: PRODUCTScalarWhereInput
    data: XOR<PRODUCTUpdateManyMutationInput, PRODUCTUncheckedUpdateManyWithoutUSERInput>
  }

  export type PRODUCTScalarWhereInput = {
    AND?: PRODUCTScalarWhereInput | PRODUCTScalarWhereInput[]
    OR?: PRODUCTScalarWhereInput[]
    NOT?: PRODUCTScalarWhereInput | PRODUCTScalarWhereInput[]
    id?: IntFilter<"PRODUCT"> | number
    uuid?: StringFilter<"PRODUCT"> | string
    product_name?: StringFilter<"PRODUCT"> | string
    description?: StringNullableFilter<"PRODUCT"> | string | null
    amount?: IntFilter<"PRODUCT"> | number
    category_id?: IntNullableFilter<"PRODUCT"> | number | null
    status?: IntFilter<"PRODUCT"> | number
    user_uuid?: StringFilter<"PRODUCT"> | string
    created_by?: IntNullableFilter<"PRODUCT"> | number | null
    created_date?: DateTimeNullableFilter<"PRODUCT"> | Date | string | null
    updated_by?: IntNullableFilter<"PRODUCT"> | number | null
    updated_date?: DateTimeNullableFilter<"PRODUCT"> | Date | string | null
  }

  export type PRODUCT_FAVORITEUpsertWithWhereUniqueWithoutUSERInput = {
    where: PRODUCT_FAVORITEWhereUniqueInput
    update: XOR<PRODUCT_FAVORITEUpdateWithoutUSERInput, PRODUCT_FAVORITEUncheckedUpdateWithoutUSERInput>
    create: XOR<PRODUCT_FAVORITECreateWithoutUSERInput, PRODUCT_FAVORITEUncheckedCreateWithoutUSERInput>
  }

  export type PRODUCT_FAVORITEUpdateWithWhereUniqueWithoutUSERInput = {
    where: PRODUCT_FAVORITEWhereUniqueInput
    data: XOR<PRODUCT_FAVORITEUpdateWithoutUSERInput, PRODUCT_FAVORITEUncheckedUpdateWithoutUSERInput>
  }

  export type PRODUCT_FAVORITEUpdateManyWithWhereWithoutUSERInput = {
    where: PRODUCT_FAVORITEScalarWhereInput
    data: XOR<PRODUCT_FAVORITEUpdateManyMutationInput, PRODUCT_FAVORITEUncheckedUpdateManyWithoutUSERInput>
  }

  export type PRODUCT_FAVORITEScalarWhereInput = {
    AND?: PRODUCT_FAVORITEScalarWhereInput | PRODUCT_FAVORITEScalarWhereInput[]
    OR?: PRODUCT_FAVORITEScalarWhereInput[]
    NOT?: PRODUCT_FAVORITEScalarWhereInput | PRODUCT_FAVORITEScalarWhereInput[]
    id?: IntFilter<"PRODUCT_FAVORITE"> | number
    favorite?: IntFilter<"PRODUCT_FAVORITE"> | number
    user_id?: IntFilter<"PRODUCT_FAVORITE"> | number
    created_by?: IntFilter<"PRODUCT_FAVORITE"> | number
    created_date?: DateTimeNullableFilter<"PRODUCT_FAVORITE"> | Date | string | null
  }

  export type PRODUCT_CATEGORYCreateWithoutPRODUCTInput = {
    name?: string | null
    created_by?: number | null
    created_date?: Date | string | null
  }

  export type PRODUCT_CATEGORYUncheckedCreateWithoutPRODUCTInput = {
    id?: number
    name?: string | null
    created_by?: number | null
    created_date?: Date | string | null
  }

  export type PRODUCT_CATEGORYCreateOrConnectWithoutPRODUCTInput = {
    where: PRODUCT_CATEGORYWhereUniqueInput
    create: XOR<PRODUCT_CATEGORYCreateWithoutPRODUCTInput, PRODUCT_CATEGORYUncheckedCreateWithoutPRODUCTInput>
  }

  export type USERCreateWithoutPRODUCTInput = {
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
    PRODUCT_FAVORITE?: PRODUCT_FAVORITECreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateWithoutPRODUCTInput = {
    id?: number
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERCreateOrConnectWithoutPRODUCTInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutPRODUCTInput, USERUncheckedCreateWithoutPRODUCTInput>
  }

  export type PRODUCT_CATEGORYUpsertWithoutPRODUCTInput = {
    update: XOR<PRODUCT_CATEGORYUpdateWithoutPRODUCTInput, PRODUCT_CATEGORYUncheckedUpdateWithoutPRODUCTInput>
    create: XOR<PRODUCT_CATEGORYCreateWithoutPRODUCTInput, PRODUCT_CATEGORYUncheckedCreateWithoutPRODUCTInput>
    where?: PRODUCT_CATEGORYWhereInput
  }

  export type PRODUCT_CATEGORYUpdateToOneWithWhereWithoutPRODUCTInput = {
    where?: PRODUCT_CATEGORYWhereInput
    data: XOR<PRODUCT_CATEGORYUpdateWithoutPRODUCTInput, PRODUCT_CATEGORYUncheckedUpdateWithoutPRODUCTInput>
  }

  export type PRODUCT_CATEGORYUpdateWithoutPRODUCTInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_CATEGORYUncheckedUpdateWithoutPRODUCTInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type USERUpsertWithoutPRODUCTInput = {
    update: XOR<USERUpdateWithoutPRODUCTInput, USERUncheckedUpdateWithoutPRODUCTInput>
    create: XOR<USERCreateWithoutPRODUCTInput, USERUncheckedCreateWithoutPRODUCTInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutPRODUCTInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutPRODUCTInput, USERUncheckedUpdateWithoutPRODUCTInput>
  }

  export type USERUpdateWithoutPRODUCTInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateWithoutPRODUCTInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT_FAVORITE?: PRODUCT_FAVORITEUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type USERCreateWithoutPRODUCT_FAVORITEInput = {
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
    PRODUCT?: PRODUCTCreateNestedManyWithoutUSERInput
  }

  export type USERUncheckedCreateWithoutPRODUCT_FAVORITEInput = {
    id?: number
    uuid: string
    username?: string | null
    password: string
    first_name?: string | null
    last_name?: string | null
    picture?: string | null
    firebase_uid?: string | null
    phone?: string | null
    email: string
    user_level?: number | null
    status?: number
    created_date?: Date | string | null
    updated_date?: Date | string | null
    PRODUCT?: PRODUCTUncheckedCreateNestedManyWithoutUSERInput
  }

  export type USERCreateOrConnectWithoutPRODUCT_FAVORITEInput = {
    where: USERWhereUniqueInput
    create: XOR<USERCreateWithoutPRODUCT_FAVORITEInput, USERUncheckedCreateWithoutPRODUCT_FAVORITEInput>
  }

  export type USERUpsertWithoutPRODUCT_FAVORITEInput = {
    update: XOR<USERUpdateWithoutPRODUCT_FAVORITEInput, USERUncheckedUpdateWithoutPRODUCT_FAVORITEInput>
    create: XOR<USERCreateWithoutPRODUCT_FAVORITEInput, USERUncheckedCreateWithoutPRODUCT_FAVORITEInput>
    where?: USERWhereInput
  }

  export type USERUpdateToOneWithWhereWithoutPRODUCT_FAVORITEInput = {
    where?: USERWhereInput
    data: XOR<USERUpdateWithoutPRODUCT_FAVORITEInput, USERUncheckedUpdateWithoutPRODUCT_FAVORITEInput>
  }

  export type USERUpdateWithoutPRODUCT_FAVORITEInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT?: PRODUCTUpdateManyWithoutUSERNestedInput
  }

  export type USERUncheckedUpdateWithoutPRODUCT_FAVORITEInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    picture?: NullableStringFieldUpdateOperationsInput | string | null
    firebase_uid?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    user_level?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT?: PRODUCTUncheckedUpdateManyWithoutUSERNestedInput
  }

  export type PRODUCTCreateWithoutPRODUCT_CATEGORYInput = {
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    status?: number
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
    USER: USERCreateNestedOneWithoutPRODUCTInput
  }

  export type PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput = {
    id?: number
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    status?: number
    user_uuid: string
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
  }

  export type PRODUCTCreateOrConnectWithoutPRODUCT_CATEGORYInput = {
    where: PRODUCTWhereUniqueInput
    create: XOR<PRODUCTCreateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput>
  }

  export type PRODUCTCreateManyPRODUCT_CATEGORYInputEnvelope = {
    data: PRODUCTCreateManyPRODUCT_CATEGORYInput | PRODUCTCreateManyPRODUCT_CATEGORYInput[]
    skipDuplicates?: boolean
  }

  export type PRODUCTUpsertWithWhereUniqueWithoutPRODUCT_CATEGORYInput = {
    where: PRODUCTWhereUniqueInput
    update: XOR<PRODUCTUpdateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedUpdateWithoutPRODUCT_CATEGORYInput>
    create: XOR<PRODUCTCreateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedCreateWithoutPRODUCT_CATEGORYInput>
  }

  export type PRODUCTUpdateWithWhereUniqueWithoutPRODUCT_CATEGORYInput = {
    where: PRODUCTWhereUniqueInput
    data: XOR<PRODUCTUpdateWithoutPRODUCT_CATEGORYInput, PRODUCTUncheckedUpdateWithoutPRODUCT_CATEGORYInput>
  }

  export type PRODUCTUpdateManyWithWhereWithoutPRODUCT_CATEGORYInput = {
    where: PRODUCTScalarWhereInput
    data: XOR<PRODUCTUpdateManyMutationInput, PRODUCTUncheckedUpdateManyWithoutPRODUCT_CATEGORYInput>
  }

  export type PRODUCTCreateManyUSERInput = {
    id?: number
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    category_id?: number | null
    status?: number
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
  }

  export type PRODUCT_FAVORITECreateManyUSERInput = {
    id?: number
    favorite?: number
    created_by: number
    created_date?: Date | string | null
  }

  export type PRODUCTUpdateWithoutUSERInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    PRODUCT_CATEGORY?: PRODUCT_CATEGORYUpdateOneWithoutPRODUCTNestedInput
  }

  export type PRODUCTUncheckedUpdateWithoutUSERInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCTUncheckedUpdateManyWithoutUSERInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_FAVORITEUpdateWithoutUSERInput = {
    favorite?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_FAVORITEUncheckedUpdateWithoutUSERInput = {
    id?: IntFieldUpdateOperationsInput | number
    favorite?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCT_FAVORITEUncheckedUpdateManyWithoutUSERInput = {
    id?: IntFieldUpdateOperationsInput | number
    favorite?: IntFieldUpdateOperationsInput | number
    created_by?: IntFieldUpdateOperationsInput | number
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCTCreateManyPRODUCT_CATEGORYInput = {
    id?: number
    uuid: string
    product_name: string
    description?: string | null
    amount?: number
    status?: number
    user_uuid: string
    created_by?: number | null
    created_date?: Date | string | null
    updated_by?: number | null
    updated_date?: Date | string | null
  }

  export type PRODUCTUpdateWithoutPRODUCT_CATEGORYInput = {
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    USER?: USERUpdateOneRequiredWithoutPRODUCTNestedInput
  }

  export type PRODUCTUncheckedUpdateWithoutPRODUCT_CATEGORYInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type PRODUCTUncheckedUpdateManyWithoutPRODUCT_CATEGORYInput = {
    id?: IntFieldUpdateOperationsInput | number
    uuid?: StringFieldUpdateOperationsInput | string
    product_name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    status?: IntFieldUpdateOperationsInput | number
    user_uuid?: StringFieldUpdateOperationsInput | string
    created_by?: NullableIntFieldUpdateOperationsInput | number | null
    created_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_by?: NullableIntFieldUpdateOperationsInput | number | null
    updated_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use USERCountOutputTypeDefaultArgs instead
     */
    export type USERCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = USERCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PRODUCT_CATEGORYCountOutputTypeDefaultArgs instead
     */
    export type PRODUCT_CATEGORYCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PRODUCT_CATEGORYCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use USERDefaultArgs instead
     */
    export type USERArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = USERDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PRODUCTDefaultArgs instead
     */
    export type PRODUCTArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PRODUCTDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PRODUCT_FAVORITEDefaultArgs instead
     */
    export type PRODUCT_FAVORITEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PRODUCT_FAVORITEDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PRODUCT_LIKEDefaultArgs instead
     */
    export type PRODUCT_LIKEArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PRODUCT_LIKEDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PRODUCT_CATEGORYDefaultArgs instead
     */
    export type PRODUCT_CATEGORYArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PRODUCT_CATEGORYDefaultArgs<ExtArgs>

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