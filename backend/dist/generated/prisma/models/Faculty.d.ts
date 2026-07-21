import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type FacultyModel = runtime.Types.Result.DefaultSelection<Prisma.$FacultyPayload>;
export type AggregateFaculty = {
    _count: FacultyCountAggregateOutputType | null;
    _min: FacultyMinAggregateOutputType | null;
    _max: FacultyMaxAggregateOutputType | null;
};
export type FacultyMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    subject: string | null;
    experience: string | null;
    qualification: string | null;
    bio: string | null;
    image: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacultyMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    subject: string | null;
    experience: string | null;
    qualification: string | null;
    bio: string | null;
    image: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FacultyCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    subject: number;
    experience: number;
    qualification: number;
    bio: number;
    image: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FacultyMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    subject?: true;
    experience?: true;
    qualification?: true;
    bio?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacultyMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    subject?: true;
    experience?: true;
    qualification?: true;
    bio?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FacultyCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    subject?: true;
    experience?: true;
    qualification?: true;
    bio?: true;
    image?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FacultyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacultyWhereInput;
    orderBy?: Prisma.FacultyOrderByWithRelationInput | Prisma.FacultyOrderByWithRelationInput[];
    cursor?: Prisma.FacultyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FacultyCountAggregateInputType;
    _min?: FacultyMinAggregateInputType;
    _max?: FacultyMaxAggregateInputType;
};
export type GetFacultyAggregateType<T extends FacultyAggregateArgs> = {
    [P in keyof T & keyof AggregateFaculty]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFaculty[P]> : Prisma.GetScalarType<T[P], AggregateFaculty[P]>;
};
export type FacultyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacultyWhereInput;
    orderBy?: Prisma.FacultyOrderByWithAggregationInput | Prisma.FacultyOrderByWithAggregationInput[];
    by: Prisma.FacultyScalarFieldEnum[] | Prisma.FacultyScalarFieldEnum;
    having?: Prisma.FacultyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FacultyCountAggregateInputType | true;
    _min?: FacultyMinAggregateInputType;
    _max?: FacultyMaxAggregateInputType;
};
export type FacultyGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    subject: string;
    experience: string | null;
    qualification: string | null;
    bio: string | null;
    image: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: FacultyCountAggregateOutputType | null;
    _min: FacultyMinAggregateOutputType | null;
    _max: FacultyMaxAggregateOutputType | null;
};
export type GetFacultyGroupByPayload<T extends FacultyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FacultyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FacultyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FacultyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FacultyGroupByOutputType[P]>;
}>>;
export type FacultyWhereInput = {
    AND?: Prisma.FacultyWhereInput | Prisma.FacultyWhereInput[];
    OR?: Prisma.FacultyWhereInput[];
    NOT?: Prisma.FacultyWhereInput | Prisma.FacultyWhereInput[];
    id?: Prisma.UuidFilter<"Faculty"> | string;
    name?: Prisma.StringFilter<"Faculty"> | string;
    slug?: Prisma.StringFilter<"Faculty"> | string;
    subject?: Prisma.StringFilter<"Faculty"> | string;
    experience?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    qualification?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    bio?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    image?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    isActive?: Prisma.BoolFilter<"Faculty"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Faculty"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Faculty"> | Date | string;
};
export type FacultyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualification?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacultyWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    slug?: string;
    AND?: Prisma.FacultyWhereInput | Prisma.FacultyWhereInput[];
    OR?: Prisma.FacultyWhereInput[];
    NOT?: Prisma.FacultyWhereInput | Prisma.FacultyWhereInput[];
    name?: Prisma.StringFilter<"Faculty"> | string;
    subject?: Prisma.StringFilter<"Faculty"> | string;
    experience?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    qualification?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    bio?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    image?: Prisma.StringNullableFilter<"Faculty"> | string | null;
    isActive?: Prisma.BoolFilter<"Faculty"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Faculty"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Faculty"> | Date | string;
}, "id" | "slug">;
export type FacultyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    experience?: Prisma.SortOrderInput | Prisma.SortOrder;
    qualification?: Prisma.SortOrderInput | Prisma.SortOrder;
    bio?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FacultyCountOrderByAggregateInput;
    _max?: Prisma.FacultyMaxOrderByAggregateInput;
    _min?: Prisma.FacultyMinOrderByAggregateInput;
};
export type FacultyScalarWhereWithAggregatesInput = {
    AND?: Prisma.FacultyScalarWhereWithAggregatesInput | Prisma.FacultyScalarWhereWithAggregatesInput[];
    OR?: Prisma.FacultyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FacultyScalarWhereWithAggregatesInput | Prisma.FacultyScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Faculty"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Faculty"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Faculty"> | string;
    subject?: Prisma.StringWithAggregatesFilter<"Faculty"> | string;
    experience?: Prisma.StringNullableWithAggregatesFilter<"Faculty"> | string | null;
    qualification?: Prisma.StringNullableWithAggregatesFilter<"Faculty"> | string | null;
    bio?: Prisma.StringNullableWithAggregatesFilter<"Faculty"> | string | null;
    image?: Prisma.StringNullableWithAggregatesFilter<"Faculty"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Faculty"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Faculty"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Faculty"> | Date | string;
};
export type FacultyCreateInput = {
    id?: string;
    name: string;
    slug: string;
    subject: string;
    experience?: string | null;
    qualification?: string | null;
    bio?: string | null;
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FacultyUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    subject: string;
    experience?: string | null;
    qualification?: string | null;
    bio?: string | null;
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FacultyUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacultyUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacultyCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    subject: string;
    experience?: string | null;
    qualification?: string | null;
    bio?: string | null;
    image?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FacultyUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacultyUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    subject?: Prisma.StringFieldUpdateOperationsInput | string;
    experience?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    qualification?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bio?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FacultyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacultyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacultyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    subject?: Prisma.SortOrder;
    experience?: Prisma.SortOrder;
    qualification?: Prisma.SortOrder;
    bio?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FacultySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subject?: boolean;
    experience?: boolean;
    qualification?: boolean;
    bio?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["faculty"]>;
export type FacultySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subject?: boolean;
    experience?: boolean;
    qualification?: boolean;
    bio?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["faculty"]>;
export type FacultySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subject?: boolean;
    experience?: boolean;
    qualification?: boolean;
    bio?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["faculty"]>;
export type FacultySelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    subject?: boolean;
    experience?: boolean;
    qualification?: boolean;
    bio?: boolean;
    image?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FacultyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "subject" | "experience" | "qualification" | "bio" | "image" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["faculty"]>;
export type $FacultyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Faculty";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        subject: string;
        experience: string | null;
        qualification: string | null;
        bio: string | null;
        image: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["faculty"]>;
    composites: {};
};
export type FacultyGetPayload<S extends boolean | null | undefined | FacultyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FacultyPayload, S>;
export type FacultyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FacultyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FacultyCountAggregateInputType | true;
};
export interface FacultyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Faculty'];
        meta: {
            name: 'Faculty';
        };
    };
    findUnique<T extends FacultyFindUniqueArgs>(args: Prisma.SelectSubset<T, FacultyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FacultyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FacultyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FacultyFindFirstArgs>(args?: Prisma.SelectSubset<T, FacultyFindFirstArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FacultyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FacultyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FacultyFindManyArgs>(args?: Prisma.SelectSubset<T, FacultyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FacultyCreateArgs>(args: Prisma.SelectSubset<T, FacultyCreateArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FacultyCreateManyArgs>(args?: Prisma.SelectSubset<T, FacultyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FacultyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FacultyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FacultyDeleteArgs>(args: Prisma.SelectSubset<T, FacultyDeleteArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FacultyUpdateArgs>(args: Prisma.SelectSubset<T, FacultyUpdateArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FacultyDeleteManyArgs>(args?: Prisma.SelectSubset<T, FacultyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FacultyUpdateManyArgs>(args: Prisma.SelectSubset<T, FacultyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FacultyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FacultyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FacultyUpsertArgs>(args: Prisma.SelectSubset<T, FacultyUpsertArgs<ExtArgs>>): Prisma.Prisma__FacultyClient<runtime.Types.Result.GetResult<Prisma.$FacultyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FacultyCountArgs>(args?: Prisma.Subset<T, FacultyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FacultyCountAggregateOutputType> : number>;
    aggregate<T extends FacultyAggregateArgs>(args: Prisma.Subset<T, FacultyAggregateArgs>): Prisma.PrismaPromise<GetFacultyAggregateType<T>>;
    groupBy<T extends FacultyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FacultyGroupByArgs['orderBy'];
    } : {
        orderBy?: FacultyGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FacultyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFacultyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FacultyFieldRefs;
}
export interface Prisma__FacultyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FacultyFieldRefs {
    readonly id: Prisma.FieldRef<"Faculty", 'String'>;
    readonly name: Prisma.FieldRef<"Faculty", 'String'>;
    readonly slug: Prisma.FieldRef<"Faculty", 'String'>;
    readonly subject: Prisma.FieldRef<"Faculty", 'String'>;
    readonly experience: Prisma.FieldRef<"Faculty", 'String'>;
    readonly qualification: Prisma.FieldRef<"Faculty", 'String'>;
    readonly bio: Prisma.FieldRef<"Faculty", 'String'>;
    readonly image: Prisma.FieldRef<"Faculty", 'String'>;
    readonly isActive: Prisma.FieldRef<"Faculty", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Faculty", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Faculty", 'DateTime'>;
}
export type FacultyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where: Prisma.FacultyWhereUniqueInput;
};
export type FacultyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where: Prisma.FacultyWhereUniqueInput;
};
export type FacultyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where?: Prisma.FacultyWhereInput;
    orderBy?: Prisma.FacultyOrderByWithRelationInput | Prisma.FacultyOrderByWithRelationInput[];
    cursor?: Prisma.FacultyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacultyScalarFieldEnum | Prisma.FacultyScalarFieldEnum[];
};
export type FacultyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where?: Prisma.FacultyWhereInput;
    orderBy?: Prisma.FacultyOrderByWithRelationInput | Prisma.FacultyOrderByWithRelationInput[];
    cursor?: Prisma.FacultyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacultyScalarFieldEnum | Prisma.FacultyScalarFieldEnum[];
};
export type FacultyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where?: Prisma.FacultyWhereInput;
    orderBy?: Prisma.FacultyOrderByWithRelationInput | Prisma.FacultyOrderByWithRelationInput[];
    cursor?: Prisma.FacultyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FacultyScalarFieldEnum | Prisma.FacultyScalarFieldEnum[];
};
export type FacultyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FacultyCreateInput, Prisma.FacultyUncheckedCreateInput>;
};
export type FacultyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FacultyCreateManyInput | Prisma.FacultyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FacultyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    data: Prisma.FacultyCreateManyInput | Prisma.FacultyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FacultyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FacultyUpdateInput, Prisma.FacultyUncheckedUpdateInput>;
    where: Prisma.FacultyWhereUniqueInput;
};
export type FacultyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FacultyUpdateManyMutationInput, Prisma.FacultyUncheckedUpdateManyInput>;
    where?: Prisma.FacultyWhereInput;
    limit?: number;
};
export type FacultyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FacultyUpdateManyMutationInput, Prisma.FacultyUncheckedUpdateManyInput>;
    where?: Prisma.FacultyWhereInput;
    limit?: number;
};
export type FacultyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where: Prisma.FacultyWhereUniqueInput;
    create: Prisma.XOR<Prisma.FacultyCreateInput, Prisma.FacultyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FacultyUpdateInput, Prisma.FacultyUncheckedUpdateInput>;
};
export type FacultyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
    where: Prisma.FacultyWhereUniqueInput;
};
export type FacultyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FacultyWhereInput;
    limit?: number;
};
export type FacultyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FacultySelect<ExtArgs> | null;
    omit?: Prisma.FacultyOmit<ExtArgs> | null;
};
