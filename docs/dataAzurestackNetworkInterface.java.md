# `dataAzurestackNetworkInterface` Submodule <a name="`dataAzurestackNetworkInterface` Submodule" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAzurestackNetworkInterface <a name="DataAzurestackNetworkInterface" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface"></a>

Represents a {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface azurestack_network_interface}.

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterface;

DataAzurestackNetworkInterface.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurestackNetworkInterfaceTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#name DataAzurestackNetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#resource_group_name DataAzurestackNetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#id DataAzurestackNetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#name DataAzurestackNetworkInterface#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.resourceGroupName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#resource_group_name DataAzurestackNetworkInterface#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#id DataAzurestackNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#timeouts DataAzurestackNetworkInterface#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.putTimeouts"></a>

```java
public void putTimeouts(DataAzurestackNetworkInterfaceTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterface;

DataAzurestackNetworkInterface.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterface;

DataAzurestackNetworkInterface.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterface;

DataAzurestackNetworkInterface.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.appliedDnsServers">appliedDnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dnsServers">dnsServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.enableIpForwarding">enableIpForwarding</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.internalDnsNameLabel">internalDnsNameLabel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.ipConfiguration">ipConfiguration</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList">DataAzurestackNetworkInterfaceIpConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.macAddress">macAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.networkSecurityGroupId">networkSecurityGroupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddresses">privateIpAddresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tags">tags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference">DataAzurestackNetworkInterfaceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.virtualMachineId">virtualMachineId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupNameInput">resourceGroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `appliedDnsServers`<sup>Required</sup> <a name="appliedDnsServers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.appliedDnsServers"></a>

```java
public java.util.List<java.lang.String> getAppliedDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dnsServers`<sup>Required</sup> <a name="dnsServers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.dnsServers"></a>

```java
public java.util.List<java.lang.String> getDnsServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enableIpForwarding`<sup>Required</sup> <a name="enableIpForwarding" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.enableIpForwarding"></a>

```java
public IResolvable getEnableIpForwarding();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalDnsNameLabel`<sup>Required</sup> <a name="internalDnsNameLabel" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.internalDnsNameLabel"></a>

```java
public java.lang.String getInternalDnsNameLabel();
```

- *Type:* java.lang.String

---

##### `ipConfiguration`<sup>Required</sup> <a name="ipConfiguration" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.ipConfiguration"></a>

```java
public DataAzurestackNetworkInterfaceIpConfigurationList getIpConfiguration();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList">DataAzurestackNetworkInterfaceIpConfigurationList</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `macAddress`<sup>Required</sup> <a name="macAddress" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.macAddress"></a>

```java
public java.lang.String getMacAddress();
```

- *Type:* java.lang.String

---

##### `networkSecurityGroupId`<sup>Required</sup> <a name="networkSecurityGroupId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.networkSecurityGroupId"></a>

```java
public java.lang.String getNetworkSecurityGroupId();
```

- *Type:* java.lang.String

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAddresses`<sup>Required</sup> <a name="privateIpAddresses" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.privateIpAddresses"></a>

```java
public java.util.List<java.lang.String> getPrivateIpAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tags"></a>

```java
public StringMap getTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeouts"></a>

```java
public DataAzurestackNetworkInterfaceTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference">DataAzurestackNetworkInterfaceTimeoutsOutputReference</a>

---

##### `virtualMachineId`<sup>Required</sup> <a name="virtualMachineId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.virtualMachineId"></a>

```java
public java.lang.String getVirtualMachineId();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `resourceGroupNameInput`<sup>Optional</sup> <a name="resourceGroupNameInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupNameInput"></a>

```java
public java.lang.String getResourceGroupNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterface.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAzurestackNetworkInterfaceConfig <a name="DataAzurestackNetworkInterfaceConfig" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterfaceConfig;

DataAzurestackNetworkInterfaceConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .resourceGroupName(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DataAzurestackNetworkInterfaceTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#name DataAzurestackNetworkInterface#name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.resourceGroupName">resourceGroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#resource_group_name DataAzurestackNetworkInterface#resource_group_name}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#id DataAzurestackNetworkInterface#id}. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#name DataAzurestackNetworkInterface#name}.

---

##### `resourceGroupName`<sup>Required</sup> <a name="resourceGroupName" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.resourceGroupName"></a>

```java
public java.lang.String getResourceGroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#resource_group_name DataAzurestackNetworkInterface#resource_group_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#id DataAzurestackNetworkInterface#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceConfig.property.timeouts"></a>

```java
public DataAzurestackNetworkInterfaceTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#timeouts DataAzurestackNetworkInterface#timeouts}

---

### DataAzurestackNetworkInterfaceIpConfiguration <a name="DataAzurestackNetworkInterfaceIpConfiguration" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterfaceIpConfiguration;

DataAzurestackNetworkInterfaceIpConfiguration.builder()
    .build();
```


### DataAzurestackNetworkInterfaceTimeouts <a name="DataAzurestackNetworkInterfaceTimeouts" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterfaceTimeouts;

DataAzurestackNetworkInterfaceTimeouts.builder()
//  .read(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#read DataAzurestackNetworkInterface#read}. |

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azurestack/d/network_interface#read DataAzurestackNetworkInterface#read}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAzurestackNetworkInterfaceIpConfigurationList <a name="DataAzurestackNetworkInterfaceIpConfigurationList" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterfaceIpConfigurationList;

new DataAzurestackNetworkInterfaceIpConfigurationList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.get"></a>

```java
public DataAzurestackNetworkInterfaceIpConfigurationOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataAzurestackNetworkInterfaceIpConfigurationOutputReference <a name="DataAzurestackNetworkInterfaceIpConfigurationOutputReference" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference;

new DataAzurestackNetworkInterfaceIpConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolsIds">applicationGatewayBackendAddressPoolsIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolsIds">loadBalancerBackendAddressPoolsIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds">loadBalancerInboundNatRulesIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.primary">primary</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress">privateIpAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocation">privateIpAddressAllocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersion">privateIpAddressVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressId">publicIpAddressId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration">DataAzurestackNetworkInterfaceIpConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `applicationGatewayBackendAddressPoolsIds`<sup>Required</sup> <a name="applicationGatewayBackendAddressPoolsIds" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.applicationGatewayBackendAddressPoolsIds"></a>

```java
public java.util.List<java.lang.String> getApplicationGatewayBackendAddressPoolsIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerBackendAddressPoolsIds`<sup>Required</sup> <a name="loadBalancerBackendAddressPoolsIds" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerBackendAddressPoolsIds"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerBackendAddressPoolsIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `loadBalancerInboundNatRulesIds`<sup>Required</sup> <a name="loadBalancerInboundNatRulesIds" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.loadBalancerInboundNatRulesIds"></a>

```java
public java.util.List<java.lang.String> getLoadBalancerInboundNatRulesIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `primary`<sup>Required</sup> <a name="primary" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.primary"></a>

```java
public IResolvable getPrimary();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `privateIpAddress`<sup>Required</sup> <a name="privateIpAddress" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddress"></a>

```java
public java.lang.String getPrivateIpAddress();
```

- *Type:* java.lang.String

---

##### `privateIpAddressAllocation`<sup>Required</sup> <a name="privateIpAddressAllocation" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressAllocation"></a>

```java
public java.lang.String getPrivateIpAddressAllocation();
```

- *Type:* java.lang.String

---

##### `privateIpAddressVersion`<sup>Required</sup> <a name="privateIpAddressVersion" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.privateIpAddressVersion"></a>

```java
public java.lang.String getPrivateIpAddressVersion();
```

- *Type:* java.lang.String

---

##### `publicIpAddressId`<sup>Required</sup> <a name="publicIpAddressId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.publicIpAddressId"></a>

```java
public java.lang.String getPublicIpAddressId();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfigurationOutputReference.property.internalValue"></a>

```java
public DataAzurestackNetworkInterfaceIpConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceIpConfiguration">DataAzurestackNetworkInterfaceIpConfiguration</a>

---


### DataAzurestackNetworkInterfaceTimeoutsOutputReference <a name="DataAzurestackNetworkInterfaceTimeoutsOutputReference" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.azurestack.data_azurestack_network_interface.DataAzurestackNetworkInterfaceTimeoutsOutputReference;

new DataAzurestackNetworkInterfaceTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRead` <a name="resetRead" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-azurestack.dataAzurestackNetworkInterface.DataAzurestackNetworkInterfaceTimeouts">DataAzurestackNetworkInterfaceTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



