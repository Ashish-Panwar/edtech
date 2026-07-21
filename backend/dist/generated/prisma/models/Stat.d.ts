import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type StatModel = runtime.Types.Result.DefaultSelection<Prisma.$StatPayload>;
export type AggregateStat = {
    _count: StatCountAggregateOutputType | null;
    _avg: StatAvgAggregateOutputType | null;
    _sum: StatSumAggregateOutputType | null;
    _min: StatMinAggregateOutputType | null;
    _max: StatMaxAggregateOutputType | null;
};
export type StatAvgAggregateOutputType = {
    value: number | null;
    sortOrder: number | null;
};
export type StatSumAggregateOutputType = {
    value: number | null;
    sortOrder: number | null;
};
export type StatMinAggregateOutputType = {
    id: string | null;
    value: number | null;
    suffix: string | null;
    label: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StatMaxAggregateOutputType = {
    id: string | null;
    value: number | null;
    suffix: string | null;
    label: string | null;
    sortOrder: number | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type StatCountAggregateOutputType = {
    id: number;
    value: number;
    suffix: number;
    label: number;
    sortOrder: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type StatAvgAggregateInputType = {
    value?: true;
    sortOrder?: true;
};
export type StatSumAggregateInputType = {
    value?: true;
    sortOrder?: true;
};
export type StatMinAggregateInputType = {
    id?: true;
    value?: true;
    suffix?: true;
    label?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StatMaxAggregateInputType = {
    id?: true;
    value?: true;
    suffix?: true;
    label?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type StatCountAggregateInputType = {
    id?: true;
    value?: true;
    suffix?: true;
    label?: true;
    sortOrder?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type StatAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatWhereInput;
    orderBy?: Prisma.StatOrderByWithRelationInput | Prisma.StatOrderByWithRelationInput[];
    cursor?: Prisma.StatWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | StatCountAggregateInputType;
    _avg?: StatAvgAggregateInputType;
    _sum?: StatSumAggregateInputType;
    _min?: StatMinAggregateInputType;
    _max?: StatMaxAggregateInputType;
};
export type GetStatAggregateType<T extends StatAggregateArgs> = {
    [P in keyof T & keyof AggregateStat]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateStat[P]> : Prisma.GetScalarType<T[P], AggregateStat[P]>;
};
export type StatGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatWhereInput;
    orderBy?: Prisma.StatOrderByWithAggregationInput | Prisma.StatOrderByWithAggregationInput[];
    by: Prisma.StatScalarFieldEnum[] | Prisma.StatScalarFieldEnum;
    having?: Prisma.StatScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: StatCountAggregateInputType | true;
    _avg?: StatAvgAggregateInputType;
    _sum?: StatSumAggregateInputType;
    _min?: StatMinAggregateInputType;
    _max?: StatMaxAggregateInputType;
};
export type StatGroupByOutputType = {
    id: string;
    value: number;
    suffix: string;
    label: string;
    sortOrder: number;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: StatCountAggregateOutputType | null;
    _avg: StatAvgAggregateOutputType | null;
    _sum: StatSumAggregateOutputType | null;
    _min: StatMinAggregateOutputType | null;
    _max: StatMaxAggregateOutputType | null;
};
export type GetStatGroupByPayload<T extends StatGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<StatGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof StatGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], StatGroupByOutputType[P]> : Prisma.GetScalarType<T[P], StatGroupByOutputType[P]>;
}>>;
export type StatWhereInput = {
    AND?: Prisma.StatWhereInput | Prisma.StatWhereInput[];
    OR?: Prisma.StatWhereInput[];
    NOT?: Prisma.StatWhereInput | Prisma.StatWhereInput[];
    id?: Prisma.UuidFilter<"Stat"> | string;
    value?: Prisma.IntFilter<"Stat"> | number;
    suffix?: Prisma.StringFilter<"Stat"> | string;
    label?: Prisma.StringFilter<"Stat"> | string;
    sortOrder?: Prisma.IntFilter<"Stat"> | number;
    isActive?: Prisma.BoolFilter<"Stat"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Stat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Stat"> | Date | string;
};
export type StatOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    suffix?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.StatWhereInput | Prisma.StatWhereInput[];
    OR?: Prisma.StatWhereInput[];
    NOT?: Prisma.StatWhereInput | Prisma.StatWhereInput[];
    value?: Prisma.IntFilter<"Stat"> | number;
    suffix?: Prisma.StringFilter<"Stat"> | string;
    label?: Prisma.StringFilter<"Stat"> | string;
    sortOrder?: Prisma.IntFilter<"Stat"> | number;
    isActive?: Prisma.BoolFilter<"Stat"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Stat"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Stat"> | Date | string;
}, "id">;
export type StatOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    suffix?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.StatCountOrderByAggregateInput;
    _avg?: Prisma.StatAvgOrderByAggregateInput;
    _max?: Prisma.StatMaxOrderByAggregateInput;
    _min?: Prisma.StatMinOrderByAggregateInput;
    _sum?: Prisma.StatSumOrderByAggregateInput;
};
export type StatScalarWhereWithAggregatesInput = {
    AND?: Prisma.StatScalarWhereWithAggregatesInput | Prisma.StatScalarWhereWithAggregatesInput[];
    OR?: Prisma.StatScalarWhereWithAggregatesInput[];
    NOT?: Prisma.StatScalarWhereWithAggregatesInput | Prisma.StatScalarWhereWithAggregatesInput[];
    id?: Prisma.UuidWithAggregatesFilter<"Stat"> | string;
    value?: Prisma.IntWithAggregatesFilter<"Stat"> | number;
    suffix?: Prisma.StringWithAggregatesFilter<"Stat"> | string;
    label?: Prisma.StringWithAggregatesFilter<"Stat"> | string;
    sortOrder?: Prisma.IntWithAggregatesFilter<"Stat"> | number;
    isActive?: Prisma.BoolWithAggregatesFilter<"Stat"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Stat"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Stat"> | Date | string;
};
export type StatCreateInput = {
    id?: string;
    value: number;
    suffix: string;
    label: string;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatUncheckedCreateInput = {
    id?: string;
    value: number;
    suffix: string;
    label: string;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    suffix?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    suffix?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatCreateManyInput = {
    id?: string;
    value: number;
    suffix: string;
    label: string;
    sortOrder?: number;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type StatUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    suffix?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    value?: Prisma.IntFieldUpdateOperationsInput | number;
    suffix?: Prisma.StringFieldUpdateOperationsInput | string;
    label?: Prisma.StringFieldUpdateOperationsInput | string;
    sortOrder?: Prisma.IntFieldUpdateOperationsInput | number;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type StatCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    suffix?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatAvgOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StatMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    suffix?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    value?: Prisma.SortOrder;
    suffix?: Prisma.SortOrder;
    label?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type StatSumOrderByAggregateInput = {
    value?: Prisma.SortOrder;
    sortOrder?: Prisma.SortOrder;
};
export type StatSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    suffix?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stat"]>;
export type StatSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    suffix?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stat"]>;
export type StatSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    value?: boolean;
    suffix?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["stat"]>;
export type StatSelectScalar = {
    id?: boolean;
    value?: boolean;
    suffix?: boolean;
    label?: boolean;
    sortOrder?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type StatOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "value" | "suffix" | "label" | "sortOrder" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["stat"]>;
export type $StatPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Stat";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        value: number;
        suffix: string;
        label: string;
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["stat"]>;
    composites: {};
};
export type StatGetPayload<S extends boolean | null | undefined | StatDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$StatPayload, S>;
export type StatCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<StatFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: StatCountAggregateInputType | true;
};
export interface StatDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Stat'];
        meta: {
            name: 'Stat';
        };
    };
    findUnique<T extends StatFindUniqueArgs>(args: Prisma.SelectSubset<T, StatFindUniqueArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends StatFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, StatFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends StatFindFirstArgs>(args?: Prisma.SelectSubset<T, StatFindFirstArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends StatFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, StatFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends StatFindManyArgs>(args?: Prisma.SelectSubset<T, StatFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends StatCreateArgs>(args: Prisma.SelectSubset<T, StatCreateArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends StatCreateManyArgs>(args?: Prisma.SelectSubset<T, StatCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends StatCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, StatCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends StatDeleteArgs>(args: Prisma.SelectSubset<T, StatDeleteArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends StatUpdateArgs>(args: Prisma.SelectSubset<T, StatUpdateArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends StatDeleteManyArgs>(args?: Prisma.SelectSubset<T, StatDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends StatUpdateManyArgs>(args: Prisma.SelectSubset<T, StatUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends StatUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, StatUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends StatUpsertArgs>(args: Prisma.SelectSubset<T, StatUpsertArgs<ExtArgs>>): Prisma.Prisma__StatClient<runtime.Types.Result.GetResult<Prisma.$StatPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends StatCountArgs>(args?: Prisma.Subset<T, StatCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], StatCountAggregateOutputType> : number>;
    aggregate<T extends StatAggregateArgs>(args: Prisma.Subset<T, StatAggregateArgs>): Prisma.PrismaPromise<GetStatAggregateType<T>>;
    groupBy<T extends StatGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: StatGroupByArgs['orderBy'];
    } : {
        orderBy?: StatGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, StatGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStatGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: StatFieldRefs;
}
export interface Prisma__StatClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface StatFieldRefs {
    readonly id: Prisma.FieldRef<"Stat", 'String'>;
    readonly value: Prisma.FieldRef<"Stat", 'Int'>;
    readonly suffix: Prisma.FieldRef<"Stat", 'String'>;
    readonly label: Prisma.FieldRef<"Stat", 'String'>;
    readonly sortOrder: Prisma.FieldRef<"Stat", 'Int'>;
    readonly isActive: Prisma.FieldRef<"Stat", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Stat", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Stat", 'DateTime'>;
}
export type StatFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where: Prisma.StatWhereUniqueInput;
};
export type StatFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where: Prisma.StatWhereUniqueInput;
};
export type StatFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where?: Prisma.StatWhereInput;
    orderBy?: Prisma.StatOrderByWithRelationInput | Prisma.StatOrderByWithRelationInput[];
    cursor?: Prisma.StatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatScalarFieldEnum | Prisma.StatScalarFieldEnum[];
};
export type StatFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where?: Prisma.StatWhereInput;
    orderBy?: Prisma.StatOrderByWithRelationInput | Prisma.StatOrderByWithRelationInput[];
    cursor?: Prisma.StatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatScalarFieldEnum | Prisma.StatScalarFieldEnum[];
};
export type StatFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where?: Prisma.StatWhereInput;
    orderBy?: Prisma.StatOrderByWithRelationInput | Prisma.StatOrderByWithRelationInput[];
    cursor?: Prisma.StatWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.StatScalarFieldEnum | Prisma.StatScalarFieldEnum[];
};
export type StatCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatCreateInput, Prisma.StatUncheckedCreateInput>;
};
export type StatCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.StatCreateManyInput | Prisma.StatCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StatCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    data: Prisma.StatCreateManyInput | Prisma.StatCreateManyInput[];
    skipDuplicates?: boolean;
};
export type StatUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatUpdateInput, Prisma.StatUncheckedUpdateInput>;
    where: Prisma.StatWhereUniqueInput;
};
export type StatUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.StatUpdateManyMutationInput, Prisma.StatUncheckedUpdateManyInput>;
    where?: Prisma.StatWhereInput;
    limit?: number;
};
export type StatUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.StatUpdateManyMutationInput, Prisma.StatUncheckedUpdateManyInput>;
    where?: Prisma.StatWhereInput;
    limit?: number;
};
export type StatUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where: Prisma.StatWhereUniqueInput;
    create: Prisma.XOR<Prisma.StatCreateInput, Prisma.StatUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.StatUpdateInput, Prisma.StatUncheckedUpdateInput>;
};
export type StatDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
    where: Prisma.StatWhereUniqueInput;
};
export type StatDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.StatWhereInput;
    limit?: number;
};
export type StatDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.StatSelect<ExtArgs> | null;
    omit?: Prisma.StatOmit<ExtArgs> | null;
};
