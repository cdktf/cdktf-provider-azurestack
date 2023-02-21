# `dataAzurestackSubnet` Submodule <a name="`dataAzurestackSubnet` Submodule" id="@cdktf/provider-azurestack.dataAzurestackSubnet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackSubnet <a name="DataAzurestackSubnet" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/subnet azurestack_subnet}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

new dataAzurestackSubnet.DataAzurestackSubnet(scope: Construct, id: string, config: DataAzurestackSubnetConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig">DataAzurestackSubnetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig">DataAzurestackSubnetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.putTimeouts"></a>

```typescript
public putTimeouts(value: DataAzurestackSubnetTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isConstruct"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

dataAzurestackSubnet.DataAzurestackSubnet.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isTerraformElement"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

dataAzurestackSubnet.DataAzurestackSubnet.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isTerraformDataSource"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

dataAzurestackSubnet.DataAzurestackSubnet.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.addressPrefix">addressPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.routeTableId">routeTableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference">DataAzurestackSubnetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.virtualNetworkNameInput">virtualNetworkNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `addressPrefix`<sup>Required</sup> <a name="addressPrefix" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.addressPrefix"></a>

```typescript
public readonly addressPrefix: string;
```

- *Type:* string

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.networkSecurityGroupId"></a>

```typescript
public readonly networkSecurityGroupId: string;
```

- *Type:* string

---

##### `routeTableId`<sup>Required</sup> <a name="routeTableId" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.routeTableId"></a>

```typescript
public readonly routeTableId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurestackSubnetTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference">DataAzurestackSubnetTimeoutsOutputReference</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.resourceGroupNameInput"></a>

```typescript
public readonly resourceGroupNameInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DataAzurestackSubnetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a> | cdktf.IResolvable

---

##### `virtualNetworkNameInput`<sup>Optional</sup> <a name="virtualNetworkNameInput" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.virtualNetworkNameInput"></a>

```typescript
public readonly virtualNetworkNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnet.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackSubnetConfig <a name="DataAzurestackSubnetConfig" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.Initializer"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

const dataAzurestackSubnetConfig: dataAzurestackSubnet.DataAzurestackSubnetConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#name DataAzurestackSubnet#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#resource_group_name DataAzurestackSubnet#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.virtualNetworkName">virtualNetworkName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#virtual_network_name DataAzurestackSubnet#virtual_network_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#id DataAzurestackSubnet#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#name DataAzurestackSubnet#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.resourceGroupName"></a>

```typescript
public readonly resourceGroupName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#resource_group_name DataAzurestackSubnet#resource_group_name}.

---

##### `virtualNetworkName`<sup>Required</sup> <a name="virtualNetworkName" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.virtualNetworkName"></a>

```typescript
public readonly virtualNetworkName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#virtual_network_name DataAzurestackSubnet#virtual_network_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#id DataAzurestackSubnet#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DataAzurestackSubnetTimeouts;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#timeouts DataAzurestackSubnet#timeouts}

---

### DataAzurestackSubnetTimeouts <a name="DataAzurestackSubnetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts.Initializer"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

const dataAzurestackSubnetTimeouts: dataAzurestackSubnet.DataAzurestackSubnetTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#read DataAzurestackSubnet#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/subnet#read DataAzurestackSubnet#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackSubnetTimeoutsOutputReference <a name="DataAzurestackSubnetTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.Initializer"></a>

```typescript
import { dataAzurestackSubnet } from '@cdktf/provider-azurestack'

new dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAzurestackSubnetTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackSubnet.DataAzurestackSubnetTimeouts">DataAzurestackSubnetTimeouts</a> | cdktf.IResolvable

---



