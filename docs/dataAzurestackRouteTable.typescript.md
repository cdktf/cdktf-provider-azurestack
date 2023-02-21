# `dataAzurestackRouteTable` Submodule <a name="`dataAzurestackRouteTable` Submodule" id="@cdktf/provider-azurestack.dataAzurestackRouteTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackRouteTable <a name="DataAzurestackRouteTable" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/route_table azurestack_route_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

new dataAzurestackRouteTable.DataAzurestackRouteTable(scope: Construct, id: string, config: DataAzurestackRouteTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig">DataAzurestackRouteTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig">DataAzurestackRouteTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurestackRouteTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isConstruct"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

dataAzurestackRouteTable.DataAzurestackRouteTable.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformElement"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformDataSource"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.route">route</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList">DataAzurestackRouteTableRouteList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.subnets">subnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.tags">tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference">DataAzurestackRouteTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.route"></a>

```typescript
public readonly route: DataAzurestackRouteTableRouteList;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList">DataAzurestackRouteTableRouteList</a>

---

##### `subnets`<sup>Required</sup> <a name="subnets" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.subnets"></a>

```typescript
public readonly subnets: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurestackRouteTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference">DataAzurestackRouteTableTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurestackRouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a> | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackRouteTableConfig <a name="DataAzurestackRouteTableConfig" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

const dataAzurestackRouteTableConfig: dataAzurestackRouteTable.DataAzurestackRouteTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#name DataAzurestackRouteTable#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#resource_group_name DataAzurestackRouteTable#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#id DataAzurestackRouteTable#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#name DataAzurestackRouteTable#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#resource_group_name DataAzurestackRouteTable#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#id DataAzurestackRouteTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurestackRouteTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#timeouts DataAzurestackRouteTable#timeouts}

---

### DataAzurestackRouteTableRoute <a name="DataAzurestackRouteTableRoute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRoute.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

const dataAzurestackRouteTableRoute: dataAzurestackRouteTable.DataAzurestackRouteTableRoute = { ... }
```


### DataAzurestackRouteTableTimeouts <a name="DataAzurestackRouteTableTimeouts" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

const dataAzurestackRouteTableTimeouts: dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#read DataAzurestackRouteTable#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/route_table#read DataAzurestackRouteTable#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackRouteTableRouteList <a name="DataAzurestackRouteTableRouteList" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

new dataAzurestackRouteTable.DataAzurestackRouteTableRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.get"></a>

```typescript
public get(index: number): DataAzurestackRouteTableRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAzurestackRouteTableRouteOutputReference <a name="DataAzurestackRouteTableRouteOutputReference" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

new dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.nextHopInIpAddress">nextHopInIpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.nextHopType">nextHopType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRoute">DataAzurestackRouteTableRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nextHopInIpAddress`<sup>Required</sup> <a name="nextHopInIpAddress" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.nextHopInIpAddress"></a>

```typescript
public readonly nextHopInIpAddress: string;
```

- *Type:* string

---

##### `nextHopType`<sup>Required</sup> <a name="nextHopType" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.nextHopType"></a>

```typescript
public readonly nextHopType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurestackRouteTableRoute;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableRoute">DataAzurestackRouteTableRoute</a>

---


### DataAzurestackRouteTableTimeoutsOutputReference <a name="DataAzurestackRouteTableTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurestackRouteTable } from '@cdktf/provider-azurestack'

new dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurestackRouteTableTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackRouteTable.DataAzurestackRouteTableTimeouts">DataAzurestackRouteTableTimeouts</a> | cdktf.IResolvable

---



